(ns uikit-hl.progress
  (:require [hoplon.core :as hl]))

(defmulti uk-progress! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-progress! elem key val))

(defn- format-progress [progress]
  (str "uk-progress-" progress))

(defmethod uk-progress! ::default
  [elem kw v]
  (h/do! elem :class {(format-progress (name kw)) v}))

(defmethod h/do! ::progress
  [elem _ v]
  (h/do! elem :class {:uk-progress v}))

(hl/defelem progress [attr kids]
  (hl/progress attr ::progress true kids))
