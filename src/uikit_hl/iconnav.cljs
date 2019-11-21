(ns uikit-hl.iconnav
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-iconnav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-iconnav! elem key val))

(defn- format-iconnav [iconnav]
  (str "uk-iconnav-" iconnav))

(defmethod uk-iconnav! ::default
  [elem kw v]
  (h/do! elem :class {(format-iconnav (name kw)) v}))

(defmethod uk-iconnav! ::iconnav
  [elem _ v]
  (h/do! elem :class {:uk-iconnav v}))
