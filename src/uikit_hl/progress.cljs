(ns uikit-hl.progress
  (:require [hoplon.core :as h]))

(defmulti uk-progress! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-progress! elem key val))

(defn- format-progress [progress]
  (str "uk-progress-" progress))

(defmethod uk-progress! ::default
  [elem kw v]
  (h/do! elem :class {(format-progress (name kw)) v}))

(defmethod uk-progress! ::progress
  [elem _ v]
  (h/do! elem :class {:uk-progress v}))

(h/defelem progress [attr kids]
  (h/progress attr ::progress true kids))
