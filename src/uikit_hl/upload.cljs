(ns uikit-hl.upload
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-upload! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-upload! elem key val))

(defn- format-upload [upload]
  (str "uk-upload-" upload))

(defmethod uk-upload! ::default
  [elem kw v]
  (elem :class {(format-upload (name kw)) v}))

(defmethod uk-upload! ::upload
  [elem _ v]
  (uk/upload elem v))
