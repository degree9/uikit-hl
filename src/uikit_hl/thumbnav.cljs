(ns uikit-hl.thumbnav
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-thumbnav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-thumbnav! elem key val))

(defn- format-thumbnav [thumbnav]
  (str "uk-thumbnav-" thumbnav))

(defmethod uk-thumbnav! ::default
  [elem kw v]
  (h/do! elem :class {(format-thumbnav (name kw)) v}))

(defmethod h/do! ::thumbnav
  [elem _ v]
  (h/do! elem :class {:uk-thumbnav v}))
