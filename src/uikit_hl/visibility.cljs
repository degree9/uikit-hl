(ns uikit-hl.visibility
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-visibility! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-visibility! elem key val))

(defn- format-visibility [visibility]
  (-> (str "uk-visibility-" visibility)
    (s/replace #"-s$" "@s")
    (s/replace #"-m$" "@m")
    (s/replace #"-l$" "@l")))

(defmethod uk-visibility! ::default
  [elem kw v]
  (h/do! elem :class {(format-visibility (name kw)) v}))

(defmethod uk-visibility! ::hidden
  [elem kw v]
  (h/do! elem :hidden v))

(defmethod uk-visibility! ::invisible
  [elem kw v]
  (h/do! elem :class {:uk-invisible v}))

(defmethod uk-visibility! ::visible
  [elem kw v]
  (h/do! elem :class {:uk-visible v}))

(defmethod uk-visibility! ::hidden-hover
  [elem kw v]
  (h/do! elem :class {:hidden-hover v}))

(defmethod uk-visibility! ::invisible-hover
  [elem kw v]
  (h/do! elem :class {:uk-invisible-hover v}))

(defmethod uk-visibility! ::hidden-touch
  [elem kw v]
  (h/do! elem :class {:hidden-touch v}))

(defmethod uk-visibility! ::hidden-notouch
  [elem kw v]
  (h/do! elem :class {:hidden-notouch v}))

(defmethod uk-visibility! ::visibility
  [elem _ v]
  (.visibility uk/uikit elem (clj->js v)))
