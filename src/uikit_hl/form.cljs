(ns uikit-hl.form
  (:refer-clojure :exclude [range])
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-form! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-form! elem key val))

(defn- format-form [form]
  (str "uk-form-" form))

(defmethod uk-form! ::default
  [elem kw v]
  (elem :class {(format-form (name kw)) v}))

(h/defelem form [{:keys [stacked horizontal] :as attr} kids]
  (h/form
    (dissoc attr :stacked :horizontal)
    ::stacked stacked
    ::horizontal horizontal
    kids))

(h/defelem icon [{:keys [flip] :as attr} kids]
  (h/span
    (dissoc attr :flip)
    ::icon true
    ::icon-flip flip
    kids))

(h/defelem label [attr kids]
  (h/label
    attr
    ::label true
    kids))

(defmethod uk-form! ::input
  [elem kw v]
  (elem :class {:uk-input v}))

(h/defelem input [attr kids]
  (h/input
    attr
    ::input true
    kids))

(defmethod uk-form! ::textarea
  [elem kw v]
  (elem :class {:uk-textarea v}))

(h/defelem textarea [attr kids]
  (h/textarea
    attr
    ::textarea true
    kids))

(defmethod uk-form! ::fieldset
  [elem kw v]
  (elem :class {:uk-fieldset v}))

(h/defelem fieldset [attr kids]
  (h/fieldset
    attr
    ::fieldset true
    kids))

(defmethod uk-form! ::legend
  [elem kw v]
  (elem :class {:uk-legend v}))

(h/defelem legend [attr kids]
  (h/legend
    attr
    ::legend true
    kids))

(defmethod uk-form! ::checkbox
  [elem kw v]
  (elem :class {:uk-checkbox v}))

(h/defelem checkbox [attr kids]
  (h/label
    (h/input
      attr
      :type "checkbox"
      ::checkbox true)
    kids))

(defmethod uk-form! ::range
  [elem kw v]
  (elem :class {:uk-range v}))

(h/defelem range [attr kids]
  (h/label
    (h/input
      attr
      :type "range"
      ::range true)
    kids))

(defmethod uk-form! ::radio
  [elem kw v]
  (elem :class {:uk-radio v}))

(h/defelem radio [attr kids]
  (h/label
    (h/input
      attr
      :type "radio"
      ::radio true)
    kids))

(defmethod uk-form! ::select
  [elem kw v]
  (elem :class {:uk-select v}))

(h/defelem select [attr kids]
  (h/select
    attr
    ::select true
    kids))

(def option h/option)

(defmethod uk-form! ::custom
  [elem _ v]
  (.formCustom uk/uikit elem (clj->js v)))
