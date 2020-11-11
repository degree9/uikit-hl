(ns uikit-hl.parallax
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-parallax! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-parallax! elem key val))

(defn- format-parallax [parallax]
  (str "uk-parallax-" parallax))

(defmethod uk-parallax! ::default
  [elem kw v]
  (h/do! elem :class {(format-parallax (name kw)) v}))

(defmethod uk-parallax! ::parallax
  [elem _ v]
  (uk/parallax elem v))
