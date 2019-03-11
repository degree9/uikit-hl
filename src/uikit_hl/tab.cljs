(ns uikit-hl.tab
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(defmethod hl/do! :uk-tab
  [elem _ v]
  (.tab uikit elem (clj->js v)))

(defmethod hl/do! :uk-tab-left
  [elem _ v]
  (hl/do! elem :class {:uk-tab-left v}))

(defmethod hl/do! :uk-tab-right
  [elem _ v]
  (hl/do! elem :class {:uk-tab-right v}))

(defmethod hl/do! :uk-tab-bottom
  [elem _ v]
  (hl/do! elem :class {:uk-tab-bottom v}))

(defmethod hl/do! :uk-active
  [elem _ v]
  (hl/do! elem :class {:uk-active v}))

(defmethod hl/do! :uk-disabled
  [elem _ v]
  (hl/do! elem :class {:uk-disabled v}))

(hl/defelem tab [{:keys [uk-tab left right bottom] :as attr} kids]
  (hl/ul
    (dissoc attr :bottom :left :right :uk-tab)
    :uk-tab        uk-tab
    :uk-tab-left   left
    :uk-tab-right  right
    :uk-tab-bottom bottom
    kids))

(hl/defelem item [{:keys [active disabled] :as attr} kids]
  (hl/li
    (hl/a
      (dissoc attr :active :disabled)
      :uk-active   active
      :uk-disabled disabled
      kids)))
