(ns uikit-hl.label
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(defmethod hl/do! :uk-label
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-label v}))

(defmethod hl/do! :uk-label-success
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-label-success v}))

(defmethod hl/do! :uk-label-warning
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-label-warning v}))

(defmethod hl/do! :uk-label-danger
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-label-danger v}))

(hl/defelem label [attr kids]
  (let [success (:success attr)
        warning (:warning attr)
        danger  (:danger  attr)
        attr    (dissoc attr :success :warning :danger)]
    (hl/span
      attr
      :uk-label true
      :uk-label-success success
      :uk-label-warning warning
      :uk-label-danger  danger
      kids)))
