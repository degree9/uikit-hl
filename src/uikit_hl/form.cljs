(ns uikit-hl.form
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(hl/defelem form [attr kids]
  (let [stacked    (:stacked    attr)
        horizontal (:horizontal attr)]
    (hl/form
      attr
      :uk-form-stacked stacked
      :uk-form-horizontal horizontal
      kids)))

(hl/defelem icon [attr kids]
  (let [flip (:flip attr)]
    (hl/span
      attr
      :uk-form-icon true
      :uk-form-icon-flip flip
      kids)))

(hl/defelem input [attr kids]
  (hl/input attr :class/uikit {:uk-input true} kids))

(hl/defelem fieldset [attr kids]
  (hl/fieldset attr :class/uikit {:uk-fieldset true} kids))

(hl/defelem legend [attr kids]
  (hl/legend attr :class/uikit {:uk-legend true} kids))

(hl/defelem checkbox [attr kids]
  (hl/label [(hl/input :class/uikit {:uk-checkbox true}) " " kids]))

(hl/defelem radio [attr kids]
  (hl/label [(hl/input attr :class/uikit {:uk-radio true}) " " kids]))

(defmethod hl/do! :uk-form-danger
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-danger v}))

(defmethod hl/do! :uk-form-success
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-success v}))

(defmethod hl/do! :uk-form-small
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-small v}))

(defmethod hl/do! :uk-form-large
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-large v}))

(defmethod hl/do! :uk-form-width-xsmall
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-width-xsmall v}))

(defmethod hl/do! :uk-form-width-small
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-width-small v}))

(defmethod hl/do! :uk-form-width-medium
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-width-medium v}))

(defmethod hl/do! :uk-form-width-large
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-width-large v}))

(defmethod hl/do! :uk-form-blank
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-blank v}))

(defmethod hl/do! :uk-form-stacked
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-stacked v}))

(defmethod hl/do! :uk-form-horizontal
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-horizontal v}))

(defmethod hl/do! :uk-form-label
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-horizontal v}))

(defmethod hl/do! :uk-form-controls
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-controls v}))

(defmethod hl/do! :uk-form-icon
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-icon v}))

(defmethod hl/do! :uk-form-icon-flip
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-form-icon-flip v}))

(defmethod hl/do! :uk-form-custom
  [elem _ v]
  (.formCustom uikit elem (clj->js v)))
