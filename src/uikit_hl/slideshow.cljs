(ns uikit-hl.slideshow
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-slideshow! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-slideshow! elem key val))

(defn- format-slideshow [slideshow]
  (str "uk-slideshow-" slideshow))

(defmethod uk-slideshow! ::default
  [elem kw v]
  (h/do! elem :class {(format-slideshow (name kw)) v}))

(defmethod uk-slideshow! ::slideshow
  [elem _ v]
  (uk/slideshow elem v))
