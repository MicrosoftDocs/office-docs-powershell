---
title: "Configure advanced settings via PowerShell for the Microsoft Purview Information Protection Client"
f1.keywords:
- NOCSH
ms.author: v-katykoenen
author: kmkoenen
manager: laurawi
ms.date: 04/11/2024
audience: Admin
ms.topic: article
ms.service: purview
ms.localizationpriority: medium
ms.collection: 
- tier1
- purview-compliance
search.appverid: 
- MOE150
- MET150
description: "Learn how to configure advanced settings for the Microsoft Purview Information Protection Client using PowerShell."
---

# Configure advanced settings via PowerShell for the Microsoft Purview Information Protection Client

### Label policy advanced settings syntax

An example of a label policy advanced setting is the setting to display the Information Protection bar in Office apps.

**For a single string value**, use the following syntax:

```PowerShell
Set-LabelPolicy -Identity <PolicyName> -AdvancedSettings @{Key="value1,value2"}
```

**For a multiple string value for the same key**, use the following syntax:

```PowerShell
Set-LabelPolicy -Identity <PolicyName> -AdvancedSettings @{Key=ConvertTo-Json("value1", "value2")}
```

### Label advanced settings syntax

An example of a label advanced setting is the setting to specify a label color.

**For a single string value**, use the following syntax:

```PowerShell
Set-Label -Identity <LabelGUIDorName> -AdvancedSettings @{Key="value1,value2"}
```

**For a multiple string value for the same key**, use the following syntax:

```PowerShell
Set-Label -Identity <LabelGUIDorName> -AdvancedSettings @{Key=ConvertTo-Json("value1", "value2")}
```



### Checking your current advanced settings

To check the current advanced settings in effect, run the following commands:

**To check your *label policy* advanced settings**, use the following syntax:

For a label policy named **Global**:

```PowerShell
(Get-LabelPolicy -Identity Global).settings
```

**To check your *label* advanced settings**, use the following syntax:

For a label named **Public**:

```powershell
(Get-Label -Identity Public).settings
```

### Examples for setting advanced settings

**Example 1**: Set a label policy advanced setting for a single string value:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissions="False"}
```

**Example 2**: Set a label advanced setting for a single string value:

```PowerShell
Set-Label -Identity Internal -AdvancedSettings @{smimesign="true"}
```

**Example 3**: Set a label advanced setting for multiple string values:

```PowerShell
Set-Label -Identity Confidential -AdvancedSettings @{labelByCustomProperties=ConvertTo-Json("Migrate Confidential label,Classification,Confidential", "Migrate Secret label,Classification,Secret")}
```

**Example 4**: Remove a label policy advanced setting by specifying a null string value:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissions=""}
```

### Specifying the label policy or label identity

Finding the label policy name for the PowerShell **Identity** parameter is simple because there is only one policy name in the Microsoft 365 compliance center.

However, for labels, the Microsoft 365 compliance center show both a **Name** and **Display name** value. In some cases, these values will be the same, but they may be different. To configure advanced settings for labels, use the **Name** value.

For example, to identify the label in the following picture, use the following syntax in your PowerShell command: `-Identity "All Company"`:

![Use 'Name' rather than 'Display name' to identify a sensitivity label](../media/labelname_scc.png)

If you prefer to specify the label **GUID**, this value is *not* shown in the Microsoft 365 compliance center. Use the [Get-Label](/powershell/module/exchange/get-label) command to find this value, as follows:

```PowerShell
Get-Label | Format-Table -Property DisplayName, Name, Guid
```

For more information about labeling names and display names:

- **Name** is the original name of the label and it is unique across all your labels. 

    This value remains the same even if you've changed your label name later on. For sensitivity labels that were migrated from Azure Information Protection, you might see original label ID from the Purview portal.

- **Display name** is the name currently displayed to users for the label, and does not need to be unique across all your labels. 

    For example, you might have a display name of **All Employees** for a sub-label under the **Confidential** label, and another display name of  **All Employees** for a sub-label under the **Highly Confidential** label. These sub-labels both display the same name, but are not the same label and have different settings.

### Order of precedence - how conflicting settings are resolved

You can use the Microsoft 365 compliance center to configure the following label policy settings:

- **Apply this label by default to documents and emails**

- **Users must provide justification to remove a label or lower classification label**

- **Require users to apply a label to their email or document**

- **Provide users with a link to a custom help page**

When more than one label policy is configured for a user, each with potentially different policy settings, the last policy setting is applied according to the order of the policies in the Microsoft 365 compliance center. For more information, see [Label policy priority (order matters)](/microsoft-365/compliance/sensitivity-labels#label-policy-priority-order-matters)

Label policy advanced settings are applied using the same logic, using the last policy setting.

## Advanced setting references

The following sections the available advanced settings for label policies and labels:

- [Advanced setting reference by feature](#advanced-setting-reference-by-feature)
- [Label policy advanced setting reference](#label-policy-advanced-setting-reference)
- [Label advanced setting reference](#label-advanced-setting-reference)
### Advanced setting reference by feature

The following sections list the advanced settings described on this page by product and feature integration:

|Feature  |Advanced settings  |
|---------|---------|
|**Outlook and email settings**     | - [Configure a label to apply S/MIME protection in Outlook](#configure-a-label-to-apply-smime-protection-in-outlook) <br> - [Customize Outlook popup messages](#customize-outlook-popup-messages) <br>- [Enable recommended classification in Outlook](#enable-recommended-classification-in-outlook)<br> - [Exempt Outlook messages from mandatory labeling](#exempt-outlook-messages-from-mandatory-labeling) <br>- [For emails with attachments, apply a label that matches the highest classification of those attachments](#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments)<br>- [Expand Outlook distribution lists when searching for email recipients](#expand-outlook-distribution-lists-when-searching-for-email-recipients) <br>- [Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) <br>- [Prevent Outlook performance issues with S/MIME emails](#prevent-outlook-performance-issues-with-smime-emails)   <br>- [Set a different default label for Outlook](#set-a-different-default-label-for-outlook)     |
|**PowerPoint settings** | - [Avoid removing shapes from PowerPoint that contain specified text, and are not headers / footers](#avoid-removing-shapes-from-powerpoint-that-contain-specified-text-and-are-not-headers--footers)<br>- [Explicitly remove external content markings from inside your PowerPoint custom layouts](#extend-external-marking-removal-to-custom-layouts)<br>- [Remove all shapes of a specific shape name from your headers and footers, instead of removing shapes by text inside the shape](#remove-all-shapes-of-a-specific-shape-name)  |
|**File Explorer settings**     | - [Always display custom permissions to users in File Explorer](#for-files-protected-with-custom-permissions-always-display-custom-permissions-to-users-in-file-explorer) <br>  - [Turn off custom permissions in File Explorer](#turn-off-custom-permissions-in-file-explorer) <br>- [Hide the Classify and Protect menu option in Windows File Explorer](#hide-the-classify-and-protect-menu-option-in-windows-file-explorer)     |
|**Performance improvements settings**     | - [Limit CPU consumption](#limit-cpu-consumption) <br>- [Limit the number of threads used by the scanner](#limit-the-number-of-threads-used-by-the-scanner) <br>- [Prevent Outlook performance issues with S/MIME emails](#prevent-outlook-performance-issues-with-smime-emails)        |
|**Settings for integrations with other labeling solutions**     | - [Migrate labels from Secure Islands and other labeling solutions](#migrate-labels-from-secure-islands-and-other-labeling-solutions) <br> - [Remove headers and footers from other labeling solutions](#remove-headers-and-footers-from-other-labeling-solutions)    |
|**AIP analytics settings**     |   - [Prevent audit data from being sent to Purview Information Protection  and Microsoft 365 analytics](#prevent-audit-data-from-being-sent-to-purview-information-protection-and-microsoft-365-analytics) <br>- [Send information type matches to Purview Information Protection analytics](#send-information-type-matches-to-azure-information-protection-analytics)      |
|**General settings**     | - [Add "Report an Issue" for users](#add-report-an-issue-for-users) <br>- [Apply a custom property when a label is applied](#apply-a-custom-property-when-a-label-is-applied) <br>-  [Change the local logging level](#change-the-local-logging-level) <br>- [Change which file types to protect](#change-which-file-types-to-protect)<br>- [Configure the autolabeling timeout on Office files](#configure-the-autolabeling-timeout-on-office-files) <br>- [Configure SharePoint timeouts](#configure-sharepoint-timeouts)<br>- [Customize justification prompt texts for modified labels](#customize-justification-prompt-texts-for-modified-labels)<br>-  [Display the Information Protection bar in Office apps](#display-the-information-protection-bar-in-office-apps) <br>- [Enable removal of protection from compressed files](#enable-removal-of-protection-from-compressed-files) <br>-  [Preserve NTFS owners during labeling (public preview)](#preserve-ntfs-owners-during-labeling-public-preview) <br> -  [Remove "Not now" for documents when you use mandatory labeling](#remove-not-now-for-documents-when-you-use-mandatory-labeling) <br>-  [Skip or ignore files during scans depending on file attributes](#skip-or-ignore-files-during-scans-depending-on-file-attributes) <br>-  [Specify a color for the label](#specify-a-color-for-the-label)<br>-  [Specify a default sub-label for a parent label](#specify-a-default-sub-label-for-a-parent-label)<br>-  [Support for changing \<EXT>.PFILE to P\<EXT>](#additionalpprefixextensions)  <br>-  [Support for disconnected computers](#support-for-disconnected-computers)     <br>-  [Turn on classification to run continuously in the background](#turn-on-classification-to-run-continuously-in-the-background) <br>- [Turn off document tracking features](#turn-off-document-tracking-features)  <br>- [Turn off the Revoke option for end-users in Office apps](#turn-off-the-revoke-option-for-end-users-in-office-apps) <br>- [Turn on classification globalization features](#turn-on-classification-globalization-features-public-preview)|
|     |         |

### Label policy advanced setting reference

Use the *AdvancedSettings* parameter with [New-LabelPolicy](/powershell/module/exchange/policy-and-compliance/new-labelpolicy) and [Set-LabelPolicy](/powershell/module/exchange/policy-and-compliance/set-labelpolicy) to define the following settings:

|Setting|Scenario and instructions|
|----------------|---------------|
|**AdditionalPPrefixExtensions**|[Support for changing \<EXT>.PFILE to P\<EXT> by using this advanced property](#additionalpprefixextensions)
|**AttachmentAction**|[For email messages with attachments, apply a label that matches the highest classification of those attachments](#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments)
|**AttachmentActionTip**|[For email messages with attachments, apply a label that matches the highest classification of those attachments](#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments)
|**DisableMandatoryInOutlook**|[Exempt Outlook messages from mandatory labeling](#exempt-outlook-messages-from-mandatory-labeling)
|**EnableAudit**|[Prevent audit data from being sent to Purview Information Protection and Microsoft 365 analytics](#prevent-audit-data-from-being-sent-to-purview-information-protection-and-microsoft-365-analytics)|
|**EnableContainerSupport**|[Enable removal of protection from PST, rar, 7zip, and MSG files](#enable-removal-of-protection-from-compressed-files)
|**EnableCustomPermissions**|[Turn off custom permissions in File Explorer](#turn-off-custom-permissions-in-file-explorer)|
|**EnableCustomPermissionsForCustomProtectedFiles**|[For files protected with custom permissions, always display custom permissions to users in File Explorer](#for-files-protected-with-custom-permissions-always-display-custom-permissions-to-users-in-file-explorer) |
|**EnableGlobalization** |[Turn on classification globalization features](#turn-on-classification-globalization-features-public-preview) |
|**EnableLabelByMailHeader**|[Migrate labels from Secure Islands and other labeling solutions](#migrate-labels-from-secure-islands-and-other-labeling-solutions)|
|**EnableLabelBySharePointProperties**|[Migrate labels from Secure Islands and other labeling solutions](#migrate-labels-from-secure-islands-and-other-labeling-solutions)
| **EnableOutlookDistributionListExpansion** | [Expand Outlook distribution lists when searching for email recipients](#expand-outlook-distribution-lists-when-searching-for-email-recipients) |
|**EnableRevokeGuiSupport**| [Turn off the Revoke option for end-users in Office apps](#turn-off-the-revoke-option-for-end-users-in-office-apps)|
| **EnableTrackAndRevoke** | [Turn off document tracking features](#turn-off-document-tracking-features) |
|**HideBarByDefault**|[Display the Information Protection bar in Office apps](#display-the-information-protection-bar-in-office-apps)|
|**JustificationTextForUserText** | [Customize justification prompt texts for modified labels](#customize-justification-prompt-texts-for-modified-labels) |
|**LogMatchedContent**|[Send information type matches to Purview Information Protection analytics](#send-information-type-matches-to-azure-information-protection-analytics)|
|**OfficeContentExtractionTimeout** | [Configure the autolabeling timeout on Office files](#configure-the-autolabeling-timeout-on-office-files) |
|**OutlookBlockTrustedDomains**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookBlockUntrustedCollaborationLabel**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookCollaborationRule**| [Customize Outlook popup messages](#customize-outlook-popup-messages)|
|**OutlookDefaultLabel**|[Set a different default label for Outlook](#set-a-different-default-label-for-outlook)|
|**OutlookGetEmailAddressesTimeOutMSProperty** | [Modify the timeout for expanding a distribution list in Outlook when implementing block messages for recipients in distribution lists](#expand-outlook-distribution-lists-when-searching-for-email-recipients) ) |
|**OutlookJustifyTrustedDomains**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookJustifyUntrustedCollaborationLabel**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookRecommendationEnabled**|[Enable recommended classification in Outlook](#enable-recommended-classification-in-outlook)|
|**OutlookOverrideUnlabeledCollaborationExtensions**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookSkipSmimeOnReadingPaneEnabled** | [Prevent Outlook performance issues with S/MIME emails](#prevent-outlook-performance-issues-with-smime-emails)|
|**OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookWarnTrustedDomains**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**OutlookWarnUntrustedCollaborationLabel**|[Implement pop-up messages in Outlook that warn, justify, or block emails being sent](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent)|
|**PFileSupportedExtensions**|[Change which file types to protect](#change-which-file-types-to-protect)|
|**PostponeMandatoryBeforeSave**|[Remove "Not now" for documents when you use mandatory labeling](#remove-not-now-for-documents-when-you-use-mandatory-labeling)|
| **PowerPointRemoveAllShapesByShapeName**|[Remove all shapes of a specific shape name from your headers and footers, instead of removing shapes by text inside the shape](#remove-all-shapes-of-a-specific-shape-name) |
|**PowerPointShapeNameToRemove** |[Avoid removing shapes from PowerPoint that contain specified text, and are not headers / footers](#avoid-removing-shapes-from-powerpoint-that-contain-specified-text-and-are-not-headers--footers) |
|**RemoveExternalContentMarkingInApp**|[Remove headers and footers from other labeling solutions](#remove-headers-and-footers-from-other-labeling-solutions)|
|**RemoveExternalMarkingFromCustomLayouts**|[Explicitly remove external content markings from inside your PowerPoint custom layouts](#extend-external-marking-removal-to-custom-layouts) |
|**ReportAnIssueLink**|[Add "Report an Issue" for users](#add-report-an-issue-for-users)|
|**RunPolicyInBackground**|[Turn on classification to run continuously in the background](#turn-on-classification-to-run-continuously-in-the-background)
|**ScannerMaxCPU** | [Limit CPU consumption](#limit-cpu-consumption) |
|**ScannerMinCPU** | [Limit CPU consumption](#limit-cpu-consumption) |
|**ScannerConcurrencyLevel**|[Limit the number of threads used by the scanner](#limit-the-number-of-threads-used-by-the-scanner)|
|**ScannerFSAttributesToSkip** | [Skip or ignore files during scans depending on file attributes](#skip-or-ignore-files-during-scans-depending-on-file-attributes)
|**SharepointWebRequestTimeout**| [Configure SharePoint timeouts](#configure-sharepoint-timeouts)|
|**SharepointFileWebRequestTimeout** |[Configure SharePoint timeouts](#configure-sharepoint-timeouts)|
|**UseCopyAndPreserveNTFSOwner** | [Preserve NTFS owners during labeling](#preserve-ntfs-owners-during-labeling-public-preview)
| | |


### Label advanced setting reference

Use the *AdvancedSettings* parameter with [New-Label](/powershell/module/exchange/policy-and-compliance/new-label) and [Set-Label](/powershell/module/exchange/policy-and-compliance/set-label).

|Setting|Scenario and instructions|
|----------------|---------------|
|**color**|[Specify a color for the label](#specify-a-color-for-the-label)|
|**customPropertiesByLabel**|[Apply a custom property when a label is applied](#apply-a-custom-property-when-a-label-is-applied)|
|**Defaultsub-labelId**|[Specify a default sub-label for a parent label](#specify-a-default-sub-label-for-a-parent-label) 
|**labelByCustomProperties**|[Migrate labels from Secure Islands and other labeling solutions](#migrate-labels-from-secure-islands-and-other-labeling-solutions)|
|**SMimeEncrypt**|[Configure a label to apply S/MIME protection in Outlook](#configure-a-label-to-apply-smime-protection-in-outlook)|
|**SMimeSign**|[Configure a label to apply S/MIME protection in Outlook](#configure-a-label-to-apply-smime-protection-in-outlook)|


## Hide the Classify and Protect menu option in Windows File Explorer

To hide the **Classify and Protect** menu option in the Windows File Explorer, create the following DWORD value name (with any value data):

**HKEY_CLASSES_ROOT\AllFilesystemObjects\shell\Microsoft.Azip.RightClick\LegacyDisable**

For more information, see [Using File Explorer to classify files](clientv2-classify.md#using-file-explorer-to-classify-files).

## Display the Information Protection bar in Office apps

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, users must select the **Show Bar** option from the **Sensitivity** button to display the Information Protection bar in Office apps. Use the **HideBarByDefault** key and set the value to **False** to automatically display this bar for users so that they can select labels from either the bar or the button. 

For the selected label policy, specify the following strings:

- Key: **HideBarByDefault**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{HideBarByDefault="False"}
```

## Exempt Outlook messages from mandatory labeling

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, when you enable the label policy setting of **All documents and emails must have a label**, all saved documents and sent emails must have a label applied. When you configure the following advanced setting, the policy setting applies only to Office documents and not to Outlook messages.

For the selected label policy, specify the following strings:

- Key: **DisableMandatoryInOutlook**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{DisableMandatoryInOutlook="True"}
```

## Enable recommended classification in Outlook

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you configure a label for recommended classification, users are prompted to accept or dismiss the recommended label in Word, Excel, and PowerPoint. This setting extends this label recommendation to also display in Outlook.

For the selected label policy, specify the following strings:

- Key: **OutlookRecommendationEnabled**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookRecommendationEnabled="True"}
```

## Enable removal of protection from compressed files

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you configure this setting, the  [PowerShell](./clientv2-admin-guide-powershell.md) cmdlet **Set-FileLabel** is enabled to allow removal of protection from PST, rar, and 7zip files.

- Key: **EnableContainerSupport**

- Value: **True**

Example PowerShell command where your policy is enabled:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableContainerSupport="True"}
```

## Set a different default label for Outlook

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you configure this setting, Outlook doesn't apply the default label that is configured as a policy setting for the option **Apply this label by default to documents and emails**. Instead, Outlook can apply a different default label, or no label.

For the selected label policy, specify the following strings:

- Key: **OutlookDefaultLabel**

- Value: \<**label GUID**> or **None**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookDefaultLabel="None"}
```

## Change which file types to protect

These configurations use a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the Purview Information Protection unified labeling client protects all file types, and the scanner from the client protects only Office file types and PDF files.

You can change this default behavior for a selected label policy, by specifying one of the following:

### PFileSupportedExtension

- Key: **PFileSupportedExtensions**

- Value: **\<string value>** 

Use the following table to identify the string value to specify:

| String value| Client| Scanner|
|-------------|-------|--------|
|\*|Default value: Apply protection to all file types|Apply protection to all file types|
|ConvertTo-Json(".jpg", ".png")|In addition to Office file types and PDF files, apply protection to the specified file name extensions | In addition to Office file types and PDF files, apply protection to the specified file name extensions
| | | |

**Example 1**:  PowerShell command for the scanner to protect all file types, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{PFileSupportedExtensions="*"}
```

**Example 2**: PowerShell command for the scanner to protect .txt files and .csv files in addition to Office files and PDF files, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{PFileSupportedExtensions=ConvertTo-Json(".txt", ".csv")}
```

With this setting, you can change which file types are protected but you cannot change the default protection level from native to generic. For example, for users running the unified labeling client, you can change the default setting so that only Office files and PDF files are protected instead of all file types. But you cannot change these file types to be generically protected with a .pfile file name extension.

### AdditionalPPrefixExtensions

The unified labeling client supports changing \<EXT>.PFILE to P\<EXT> by using the advanced property, **AdditionalPPrefixExtensions**. This advanced property is supported from the File Explorer, PowerShell, and by the scanner. All apps have similar behavior.   

- Key: **AdditionalPPrefixExtensions**

- Value: **\<string value>** 

Use the following table to identify the string value to specify:

| String value| Client and Scanner|
|-------------|---------------|
|\*|All PFile extensions become P\<EXT>|
|\<null value>| Default value behaves like the default protection value.|
|ConvertTo-Json(".dwg", ".zip")|In addition to the previous list, ".dwg" and ".zip" become P\<EXT>| 

With this setting, the following extensions always become **P\<EXT>**: ".txt", ".xml", ".bmp", ".jt", ".jpg", ".jpeg", ".jpe", ".jif", ".jfif", ".jfi", ".png", ".tif", ".tiff", ".gif"). Notable exclusion is that "ptxt" does not become "txt.pfile". 

**AdditionalPPrefixExtensions** only works if protection of PFiles with the advanced property - [**PFileSupportedExtension**](#pfilesupportedextension) is enabled. 

**Example 1**: PowerShell command to behave like the default behavior where Protect ".dwg" becomes ".dwg.pfile":

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions =""}
```

**Example 2**:  PowerShell command to change all PFile extensions from generic protection (dwg.pfile) to native protection (.pdwg) when the files are protected:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions ="*"}
```

**Example 3**: PowerShell command to change ".dwg"  to ".pdwg" when using this service protect this file:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions =ConvertTo-Json(".dwg")}
```



## Remove "Not now" for documents when you use mandatory labeling

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you use the label policy setting of **All documents and emails must have a label**, users are prompted to select a label when they first save an Office document and when they send an email from Outlook.

For documents, users can select **Not now** to temporarily dismiss the prompt to select a label and return to the document. However, they cannot close the saved document without labeling it. 

When you configure the **PostponeMandatoryBeforeSave** setting, the **Not now** option is removed, so that users must select a label when the document is first saved.

> [!TIP]
> The **PostponeMandatoryBeforeSave** setting also ensures that shared documents are labeled before they're sent by email. 
>
>By default, even if you have **All documents and emails must have a label** enabled in your policy, users are only promoted to label files attached to emails from within Outlook.  
> 
For the selected label policy, specify the following strings:

- Key: **PostponeMandatoryBeforeSave**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{PostponeMandatoryBeforeSave="False"}
```

## Remove headers and footers from other labeling solutions

This configuration uses policy [advanced settings](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

There are two methods to remove classifications from other labeling solutions:

|Setting  |Description  |
|---------|---------|
|**WordShapeNameToRemove**     |  Removes any shape from Word documents where the shape name matches the name as defined in the **WordShapeNameToRemove** advanced property.  <br><br>For more information, see [Use the WordShapeNameToRemove advanced property](#use-the-wordshapenametoremove-advanced-property).     |
|**RemoveExternalContentMarkingInApp** <br><br>**ExternalContentMarkingToRemove**   |    Lets you remove or replace text-based headers or footers from Word, Excel, and PowerPoint documents. <br><br>For more information, see: <br>- [Use the RemoveExternalContentMarkingInApp advanced property](#use-the-removeexternalcontentmarkinginapp-advanced-property)<br>- [How to configure ExternalContentMarkingToRemove](#how-to-configure-externalcontentmarkingtoremove).    |
|     |         |

### Use the WordShapeNameToRemove advanced property

*The **WordShapeNameToRemove** advanced property is supported from version 2.6.101.0 and above*

This setting lets you remove or replace shape-based labels from Word documents when those visual markings have been applied by another labeling solution. For example, the shape contains the name of an old label that you have now migrated to sensitivity labels to use a new label name and its own shape.

To use this advanced property, you'll need to find the shape name in the Word document and then define them in the **WordShapeNameToRemove** advanced property list of shapes. The service will remove any shape in Word that starts with a name defined in list of shapes in this advanced property.

Avoid removing shapes that contain the text that you wish to ignore, by defining the name of all shapes to remove and  avoid checking the text in all shapes, which is a resource-intensive process.

> [!NOTE]
> In Microsoft Word, shapes can be removed either by defining the shapes name, or by its text, but not both. If the **WordShapeNameToRemove** property is defined, any configurations defined by the [ExternalContentMarkingToRemove](#how-to-configure-externalcontentmarkingtoremove) value are ignored.
>

**To find the name of the shape that you're using and wish to exclude**:

1. In Word, display the **Selection** pane: **Home** tab > **Editing** group > **Select** option > **Selection Pane**.

2. Select the shape on the page that you wish to mark for removal. The name of the shape you mark is now highlighted in the **Selection** pane.

Use the name of the shape to specify a string value for the ****WordShapeNameToRemove**** key. 

Example: The shape name is **dc**. To remove the shape with this name, you specify the value: `dc`.

- Key: **WordShapeNameToRemove**

- Value: \<**Word shape name**> 

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{WordShapeNameToRemove="dc"}
```

When you have more than one Word shape to remove, specify as many values as you have shapes to remove.

### Use the RemoveExternalContentMarkingInApp advanced property

This setting lets you remove or replace text-based headers or footers from documents when those visual markings have been applied by another labeling solution. For example, the old footer contains the name of an old label that you have now migrated to sensitivity labels to use a new label name and its own footer.

When the unified labeling client gets this configuration in its policy, the old headers and footers are removed or replaced when the document is opened in the Office app and any sensitivity label is applied to the document.

This configuration is not supported for Outlook, and be aware that when you use it with Word, Excel, and PowerPoint, it can negatively affect the performance of these apps for users. The configuration lets you define settings per application, for example, search for text in the headers and footers of Word documents but not Excel spreadsheets or PowerPoint presentations.

Because the pattern matching affects the performance for users, we recommend that you limit the Office application types (**W**ord, E**X**cel, **P**owerPoint) to just those that need to be searched.
For the selected label policy, specify the following strings:

- Key: **RemoveExternalContentMarkingInApp**

- Value: \<**Office application types WXP**> 

Examples:

- To search Word documents only, specify **W**.

- To search Word documents and PowerPoint presentations, specify **WP**.

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{RemoveExternalContentMarkingInApp="WX"}
```

You then need at least one more advanced client setting, [ExternalContentMarkingToRemove](#how-to-configure-externalcontentmarkingtoremove), to specify the contents of the header or footer, and how to remove or replace them.

### How to configure ExternalContentMarkingToRemove

When you specify the string value for the **ExternalContentMarkingToRemove** key, you have three options that use regular expressions. For each of these scenarios, use the syntax shown in the **Example value** column in the following table:

|Option  |Example description |Example value|
|---------|---------|---------|
|**Partial match to remove everything in the header or footer**     | Your headers or footers contain the string **TEXT TO REMOVE**, and you want to completely remove these headers or footers.   |`*TEXT*`  | 
|**Complete match to remove just specific words in the header or footer**     |    Your headers or footers contain the string **TEXT TO REMOVE**, and you want to remove the word **TEXT** only, leaving the header or footer string as **TO REMOVE**.      |`TEXT ` |
|**Complete match to remove everything in the header or footer**     |Your headers or footers have the string **TEXT TO REMOVE**. You want to remove headers or footers that have exactly this string.         |`^TEXT TO REMOVE$`|
|     |         | |


The pattern matching for the string that you specify is case-insensitive. The maximum string length is 255 characters, and cannot include white spaces. 

Because some documents might include invisible characters or different kinds of spaces or tabs, the string that you specify for a phrase or sentence might not be detected. Whenever possible, specify a single distinguishing word for the value and be sure to test the results before you deploy in production.

For the same label policy, specify the following strings:

- Key: **ExternalContentMarkingToRemove**

- Value: \<**string to match, defined as regular expression**> 

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ExternalContentMarkingToRemove="*TEXT*"}
```

For more information, see:

- [Multiline headers or footers](#multiline-headers-or-footers)
- [Optimization for PowerPoint](#optimization-for-powerpoint)

#### Multiline headers or footers

If a header or footer text is more than a single line, create a key and value for each line. For example, if you have the following footer with two lines:

**The file is classified as Confidential**<br>
**Label applied manually**

To remove this multiline footer, you create the following two entries for the same label policy:

- Key: **ExternalContentMarkingToRemove**
- Key Value 1: **\*Confidential***
- Key Value 2: **\*Label applied*** 

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ExternalContentMarkingToRemove=ConvertTo-Json("Confidential","Label applied")}
```

#### Optimization for PowerPoint

Headers and footers in PowerPoint are implemented as shapes. For the **msoTextBox**, **msoTextEffect**, **msoPlaceholder**, and **msoAutoShape** shape types, the following advanced settings provide additional optimizations:

- [PowerPointShapeNameToRemove](#avoid-removing-shapes-from-powerpoint-that-contain-specified-text-and-are-not-headers--footers)
- [RemoveExternalMarkingFromCustomLayouts](#extend-external-marking-removal-to-custom-layouts)

Additionally, the [PowerPointRemoveAllShapesByShapeName](#remove-all-shapes-of-a-specific-shape-name) can remove any shape type, based on the shape name.

For more information, see [Find the name of the shape that you're using as a header or footer](#find-the-name-of-the-shape-that-youre-using-as-a-header-or-footer).

##### Avoid removing shapes from PowerPoint that contain specified text, and are not headers / footers

To avoid removing shapes that contain the text that you have specified, but are not headers or footers, use an additional advanced client setting named **PowerPointShapeNameToRemove**. 

We also recommend using this setting to avoid checking the text in all shapes, which is a resource-intensive process. 

- If you do not specify this additional advanced client setting, and PowerPoint is included in the [RemoveExternalContentMarkingInApp](#remove-headers-and-footers-from-other-labeling-solutions) key value, all shapes will be checked for the text that you specify in the [ExternalContentMarkingToRemove](#how-to-configure-externalcontentmarkingtoremove) value. 

- If this value is specified, only shapes that meet the shape name criteria and also have text that matches the string provided with [ExternalContentMarkingToRemove](#how-to-configure-externalcontentmarkingtoremove) will be removed.

For example:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{PowerPointShapeNameToRemove="fc"}
```

##### Extend external marking removal to custom layouts

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the logic used to remove external content markings ignores custom layouts configured in PowerPoint. To extend this logic to custom layouts, set the **RemoveExternalMarkingFromCustomLayouts** advanced property to **True**.

- Key: **RemoveExternalMarkingFromCustomLayouts**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{RemoveExternalMarkingFromCustomLayouts="True"}
```

##### Remove all shapes of a specific shape name

If you are using PowerPoint custom layouts, and want to remove all shapes of a specific shape name from your headers and footers, use the **PowerPointRemoveAllShapesByShapeName** advanced setting, with the name of the shape you want to remove.

Using the **PowerPointRemoveAllShapesByShapeName** setting ignores the text inside your shapes, and instead uses the shape name identify the shapes you want to remove.

For example:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{PowerPointRemoveAllShapesByShapeName="Arrow: Right"}
```

For more information, see:

- [Find the name of the shape that you're using as a header or footer](#find-the-name-of-the-shape-that-youre-using-as-a-header-or-footer)
- [Remove external content marking from custom layouts in PowerPoint](#remove-external-content-marking-from-custom-layouts-in-powerpoint)

##### Find the name of the shape that you're using as a header or footer

1. In PowerPoint, display the **Selection** pane: **Format** tab > **Arrange** group > **Selection Pane**.

2. Select the shape on the slide that contains your header or footer. The name of the selected shape is now highlighted in the **Selection** pane.

Use the name of the shape to specify a string value for the **PowerPointShapeNameToRemove** key. 

**Example**: The shape name is **fc**. To remove the shape with this name, you specify the value: `fc`.

- Key: **PowerPointShapeNameToRemove**

- Value: \<**PowerPoint shape name**> 

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{PowerPointShapeNameToRemove="fc"}
```

When you have more than one PowerPoint shape to remove, specify as many values as you have shapes to remove.

By default, only the Master slides are checked for headers and footers. To extend this search to all slides, which is a much more resource-intensive process, use an additional advanced client setting named **RemoveExternalContentMarkingInAllSlides**:

- Key: **RemoveExternalContentMarkingInAllSlides**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{RemoveExternalContentMarkingInAllSlides="True"}
```

##### Remove external content marking from custom layouts in PowerPoint

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the logic used to remove external content markings ignores custom layouts configured in PowerPoint. To extend this logic to custom layouts, set the **RemoveExternalMarkingFromCustomLayouts** advanced property to **True**.

- Key: **RemoveExternalMarkingFromCustomLayouts**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{RemoveExternalMarkingFromCustomLayouts="True"}
```

## Turn off custom permissions in File Explorer

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, users see an option named **Protect with custom permissions** when they right-click in File Explorer and choose **Classify and protect**. This option lets them set their own protection settings that can override any protection settings that you might have included with a label configuration. Users can also see an option to remove protection. When you configure this setting, users do not see these options.

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **EnableCustomPermissions**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissions="False"}
```

## For files protected with custom permissions, always display custom permissions to users in File Explorer

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you configure the advanced client setting to [turn off custom permissions in File Explorer](#turn-off-custom-permissions-in-file-explorer), by default, users are not able to see or change custom permissions that are already set in a protected document.

However, there's another advanced client setting that you can specify so that in this scenario, users can see and change custom permissions for a protected document when they use File Explorer and right-click the file.

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **EnableCustomPermissionsForCustomProtectedFiles**

- Value: **True**

Example PowerShell command:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissionsForCustomProtectedFiles="True"}
```

## For email messages with attachments, apply a label that matches the highest classification of those attachments

This configuration uses policy [advanced settings](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

This setting is for when users attach labeled documents to an email, and do not label the email message itself. In this scenario, a label is automatically selected for them, based on the classification labels that are applied to the attachments. The highest classification label is selected.

The attachment must be a physical file, and cannot be a link to a file (for example, a link to a file on Microsoft SharePoint or OneDrive).

You can configure this setting to **Recommended**, so that users are prompted to apply the selected label to their email message, with a customizable tooltip. Users can accept the recommendation or dismiss it. Or, you can configure this setting to **Automatic**, where the selected label is automatically applied but users can remove the label or select a different label before sending the email.

> [!NOTE]
> When the attachment with the highest classification label is configured for protection with the setting of user-defined permissions:
> 
> - When the label's user-defined permissions include Outlook (Do Not Forward), that label is selected and Do Not Forward protection is applied to the email.
> - When the label's user-defined permissions are just for Word, Excel, PowerPoint, and File Explorer, that label is not applied to the email message, and neither is protection.
> 

To configure this advanced setting, enter the following strings for the selected label policy:

- Key 1: **AttachmentAction**

- Key Value 1: **Recommended** or **Automatic**

- Key 2: **AttachmentActionTip**

- Key Value 2: "\<customized tooltip>"

The customized tooltip supports a single language only.

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction="Automatic"}
```

## Add "Report an Issue" for users

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you specify the following advanced client setting, users see a **Report an Issue** option that they can select from the **Help and Feedback** client dialog box. Specify an HTTP string for the link. For example, a customized web page that you have for users to report issues, or an email address that goes to your help desk. 

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **ReportAnIssueLink**

- Value: **\<HTTP string>**

Example value for a website: `https://support.contoso.com`

Example value for an email address: `mailto:helpdesk@contoso.com`

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ReportAnIssueLink="mailto:helpdesk@contoso.com"}
```

## Implement pop-up messages in Outlook that warn, justify, or block emails being sent

This configuration uses policy [advanced settings](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you create and configure the following advanced client settings, users see pop-up messages in Outlook that can warn them before sending an email, or ask them to provide justification why they are sending an email, or prevent them from sending an email for either of the following scenarios:

- **Their email or attachment for the email has a specific label**:
    - The attachment can be any file type

- **Their email or attachment for the email doesn't have a label**:
    - The attachment can be an Office document or PDF document

When these conditions are met, the user sees a pop-up message with one of the following actions:

|Type  |Description  |
|---------|---------|
|**Warn**     | The user can confirm and send, or cancel.        |
|**Justify**     |  The user is prompted for justification (predefined options or free-form), and the user can then send or cancel the email. <br>The justification text is written to the email x-header, so that it can be read by other systems, such as data loss prevention (DLP) services.       |
|**Block**     |    The user is prevented from sending the email while the condition remains. <br>The message includes the reason for blocking the email, so the user can address the problem. <br>For example, remove specific recipients, or label the email.     |
|     |         | 

When the popup-messages are for a specific label, you can configure exceptions for recipients by domain name.

See the video [Purview Information Protection Outlook Popup Configuration](https://azure.microsoft.com/resources/videos/how-to-configure-azure-information-protection-popup-for-outlook/) for a walkthrough example of how to configure these settings.

> [!TIP]
> To ensure that popups are displayed even when documents are shared from outside Outlook **(File > Share > Attach a copy)**, also configure the [PostponeMandatoryBeforeSave](#remove-not-now-for-documents-when-you-use-mandatory-labeling) advanced setting.

For more information, see:

- [To implement the warn, justify, or block pop-up messages for specific labels](#to-implement-the-warn-justify-or-block-pop-up-messages-for-specific-labels)
- [To implement the warn, justify, or block pop-up messages for emails or attachments that don't have a label](#to-implement-the-warn-justify-or-block-pop-up-messages-for-emails-or-attachments-that-dont-have-a-label)

### To implement the warn, justify, or block pop-up messages for specific labels

For the selected policy, create one or more of the following advanced settings with the following keys. For the values, specify one or more labels by their GUIDs, each one separated by a comma.

Example value for multiple label GUIDs as a comma-separated string: 

```sh
dcf781ba-727f-4860-b3c1-73479e31912b,1ace2cc3-14bc-4142-9125-bf946a70542c,3e9df74d-3168-48af-8b11-037e3021813f
```

|Message type  |Key/Value  |
|---------|---------|
|**Warn**     |  Key: **OutlookWarnUntrustedCollaborationLabel** <br><br>Value: \<**label GUIDs, comma-separated**>       |
|**Justify**     |  Key: **OutlookJustifyUntrustedCollaborationLabel** <br><br>Value: \<**label GUIDs, comma-separated**>       |
|**Block**     | Key: **OutlookBlockUntrustedCollaborationLabel** <br><br>Value: \<**label GUIDs, comma-separated**>       |
|     |         |



Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookWarnUntrustedCollaborationLabel="8faca7b8-8d20-48a3-8ea2-0f96310a848e,b6d21387-5d34-4dc8-90ae-049453cec5cf,bb48a6cb-44a8-49c3-9102-2d2b017dcead,74591a94-1e0e-4b5d-b947-62b70fc0f53a,6c375a97-2b9b-4ccd-9c5b-e24e4fd67f73"}

Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookJustifyUntrustedCollaborationLabel="dc284177-b2ac-4c96-8d78-e3e1e960318f,d8bb73c3-399d-41c2-a08a-6f0642766e31,750e87d4-0e91-4367-be44-c9c24c9103b4,32133e19-ccbd-4ff1-9254-3a6464bf89fd,74348570-5f32-4df9-8a6b-e6259b74085b,3e8d34df-e004-45b5-ae3d-efdc4731df24"}

Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookBlockUntrustedCollaborationLabel="0eb351a6-0c2d-4c1d-a5f6-caa80c9bdeec,40e82af6-5dad-45ea-9c6a-6fe6d4f1626b"}
```

For further customization, you can also [exempt domain names for pop-up messages configured for specific labels](#to-exempt-domain-names-for-pop-up-messages-configured-for-specific-labels).

> [!NOTE]
> The advanced settings in this section (**OutlookWarnUntrustedCollaborationLabel**, **OutlookJustifyUntrustedCollaborationLabel**, and **OutlookBlockUntrustedCollaborationLabel**) are for when a *specific* label is in use.
> 
> To implement default popup messages for *unlabled* content, use the **[OutlookUnlabeledCollaborationAction](#to-implement-the-warn-justify-or-block-pop-up-messages-for-emails-or-attachments-that-dont-have-a-label)** advanced setting. To customize your popup messages for unlabeled content, use a **.json** file to define your advanced settings. 
>
>For more information, see [Customize Outlook popup messages](#customize-outlook-popup-messages).
> 
> [!TIP]
> To ensure that your block messages are displayed as needed, even for a recipient located inside an Outlook distribution list, make sure to add the [EnableOutlookDistributionListExpansion](#expand-outlook-distribution-lists-when-searching-for-email-recipients) advanced setting.
>

#### To exempt domain names for pop-up messages configured for specific labels

For the labels that you've specified with these pop-up messages, you can exempt specific domain names so that users do not see the messages for recipients who have that domain name included in their email address. In this case, the emails are sent without interruption. To specify multiple domains, add them as a single string, separated by commas.

A typical configuration is to display the pop-up messages only for recipients who are external to your organization or who aren't authorized partners for your organization. In this case, you specify all the email domains that are used by your organization and by your partners.

For the same label policy, create the following advanced client settings and for the value, specify one or more domains, each one separated by a comma.

Example value for multiple domains as a comma-separated string: `contoso.com,fabrikam.com,litware.com`

|Message type  |Key/Value  |
|---------|---------|
|**Warn**     |  Key: **OutlookWarnTrustedDomains** <br><br>Value: **\<**domain names, comma separated**>**     |
|**Justify**     | Key: **OutlookJustifyTrustedDomains** <br><br>Value: **\<**domain names, comma separated**>**       |
|**Block**     | Key: **OutlookBlockTrustedDomains** <br><br>Value: **\<**domain names, comma separated**>**      |
|     |         |


For example, let's say you have specified the **OutlookBlockUntrustedCollaborationLabel** advanced client setting for the **Confidential \ All Employees** label. 

You now specify the additional advanced client setting of **OutlookBlockTrustedDomains** with **contoso.com**. As a result, a user can send an email to `john@sales.contoso.com` when it is labeled **Confidential \ All Employees**, but will be blocked from sending an email with the same label to a Gmail account.

Example PowerShell commands, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookBlockTrustedDomains="contoso.com"}

Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookJustifyTrustedDomains="contoso.com,fabrikam.com,litware.com"}
```

> [!NOTE]
> To ensure that your block messages are displayed as needed, even for a recipient located inside an Outlook distribution list, make sure to add the [EnableOutlookDistributionListExpansion](#expand-outlook-distribution-lists-when-searching-for-email-recipients) advanced setting.
>

### To implement the warn, justify, or block pop-up messages for emails or attachments that don't have a label

For the same label policy, create the following advanced client setting with one of the following values:

|Message type  |Key/Value  |
|---------|---------|
|**Warn**     |  Key: **OutlookUnlabeledCollaborationAction** <br><br>Value: **Warn**     |
|**Justify**     |Key: **OutlookUnlabeledCollaborationAction**<br><br>Value: **Justify**       |
|**Block**     | Key: **OutlookUnlabeledCollaborationAction** <br><br>Value: **Block**      |
|  **Turn off these messages**   |   Key: **OutlookUnlabeledCollaborationAction** <br><br>Value: **Off**      |
| | |


Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookUnlabeledCollaborationAction="Warn"}
```

For further customization, see:

- [To define specific file name extensions for the warn, justify, or block pop-up messages for email attachments that don't have a label](#to-define-specific-file-name-extensions-for-the-warn-justify-or-block-pop-up-messages-for-email-attachments-that-dont-have-a-label)
- [To specify a different action for email messages without attachments](#to-specify-a-different-action-for-email-messages-without-attachments)
- [Customize Outlook popup messages](#customize-outlook-popup-messages)

#### To define specific file name extensions for the warn, justify, or block pop-up messages for email attachments that don't have a label

By default, the warn, justify, or block pop-up messages apply to all Office documents and PDF documents. You can refine this list by specifying which file name extensions should display the warn, justify, or block messages with an additional advanced setting and a comma-separated list of file name extensions.

Example value for multiple file name extensions to define as a comma-separated string: `.XLSX,.XLSM,.XLS,.XLTX,.XLTM,.DOCX,.DOCM,.DOC,.DOCX,.DOCM,.PPTX,.PPTM,.PPT,.PPTX,.PPTM`

In this example, an unlabeled PDF document will not result in warn, justify, or block pop-up messages.

For the same label policy, enter the following strings: 


- Key: **OutlookOverrideUnlabeledCollaborationExtensions**

- Value: **\<**file name extensions to display messages, comma separated**>**


Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookOverrideUnlabeledCollaborationExtensions=".PPTX,.PPTM,.PPT,.PPTX,.PPTM"}
```

#### To specify a different action for email messages without attachments

By default, the value that you specify for [OutlookUnlabeledCollaborationAction](#to-implement-the-warn-justify-or-block-pop-up-messages-for-emails-or-attachments-that-dont-have-a-label) to warn, justify, or block pop-up messages applies to emails or attachments that don't have a label. 

You can refine this configuration by specifying another advanced setting for email messages that don't have attachments.

Create the following advanced client setting with one of the following values:

|Message type  |Key/Value  |
|---------|---------|
|**Warn**     | Key: **OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior** <br><br>Value: **Warn**
     |
|**Justify**     |Key: **OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior** <br><br>Value: **Justify**      |
|**Block**     | Key: **OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior** <br><br>Value: **Block**     |
|  **Turn off these messages**   |    Key: **OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior** <br><br>Value: **Off**    |
| | |


If you don't specify this client setting, the value that you specify for [OutlookUnlabeledCollaborationAction](#to-implement-the-warn-justify-or-block-pop-up-messages-for-emails-or-attachments-that-dont-have-a-label) is used for unlabeled email messages without attachments as well as unlabeled email messages with attachments.

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior="Warn"}
```

## Expand Outlook distribution lists when searching for email recipients

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

To extend support from other advanced settings to recipients inside Outlook distribution lists, set the **EnableOutlookDistributionListExpansion** advanced setting to **true**.

- Key: **EnableOutlookDistributionListExpansion**
- Value: **true**

For example, if you've configured the [OutlookBlockTrustedDomains](#to-implement-the-warn-justify-or-block-pop-up-messages-for-specific-labels), [OutlookBlockUntrustedCollaborationLabel](#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) advanced settings, and then also configure the **EnableOutlookDistributionListExpansion** setting, Outlook is enabled to expand the distribution list to ensuring that a block message appears as needed.

The default timeout for expanding the distribution list is **2000** milliseconds.

To modify this timeout, create the following advanced setting for the selected policy:

- Key: **OutlookGetEmailAddressesTimeOutMSProperty**
- Value: *Integer, in milliseconds*

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{
  EnableOutlookDistributionListExpansion="true"
  OutlookGetEmailAddressesTimeOutMSProperty="3000"
}
```

## Prevent audit data from being sent to AIP and Microsoft 365 analytics

By default, the Purview Information Protection unified labeling client supports central reporting and sends its audit data to:

- [Purview Information Protection analytics](../reports-aip.md), if you've configured a [Log Analytics workspace](https://azure.microsoft.com/pricing/details/log-analytics)
- Microsoft 365, where you can view them in the [Activity Explorer](/microsoft-365/compliance/data-classification-activity-explorer)

To change this behavior, so that audit data is not sent, do the following:

1. Add the following policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) using the Office 365 Security & Compliance Center PowerShell:

    - Key: **EnableAudit**

    - Value: **False**

    For example, if your label policy is named "Global":

    ```PowerShell
    Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableAudit="False"}
    ```

    > [!NOTE]
    > By default, this advanced setting is not present in the policy, and the audit logs are sent.
    >

1. In all Purview Information Protection client machines, delete the following folder: **%localappdata%\Microsoft\MSIP\mip**

To enable the client to send audit log data again, change the advanced setting value to **True**. You do not need to manually create the **%localappdata%\Microsoft\MSIP\mip** folder again on your client machines.

## Send information type matches to Purview Information Protection analytics

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the unified labeling client does not send content matches for sensitive info types to [Purview Information Protection analytics](../reports-aip.md). For more information about this additional information that can be sent, see the [Content matches for deeper analysis](../reports-aip.md#content-matches-for-deeper-analysis) section from the central reporting documentation.

To send content matches when sensitive information types are sent, create the following advanced client setting in a label policy: 

- Key: **LogMatchedContent**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{LogMatchedContent="True"}
```

## Limit CPU consumption

Starting from scanner version 2.7.x.x, we recommend limiting CPU consumption using the following **ScannerMaxCPU** and **ScannerMinCPU** advanced settings. 

> [!IMPORTANT]
> When the following thread limiting policy is in use, **ScannerMaxCPU** and **ScannerMinCPU** advanced settings are ignored. To limit CPU consumption using **ScannerMaxCPU** and **ScannerMinCPU** advanced settings, cancel the use of policies that limit the number of threads. 

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

To limit CPU consumption on the scanner machine, it is manageable by creating two advanced settings: 

- **ScannerMaxCPU**: 

    Set to **100** by default, which means there is no limit of maximum CPU consumption. In this case, the scanner process will try to use all available CPU time to maximize your scan rates. 

    If you set **ScannerMaxCPU** to less than 100, the scanner will monitor the CPU consumption over the past 30 minutes. If the average CPU crossed the limit you set, it will start to reduce number of threads allocated for new files. 

    The limit on the number of threads will continue as long as CPU consumption is higher than the limit set for **ScannerMaxCPU**.

- **ScannerMinCPU**:

    Only checked if **ScannerMaxCPU** is not equal to 100, and cannot be set to a number that is higher than the  **ScannerMaxCPU** value.  We recommend keeping **ScannerMinCPU** set at least 15 points lower than the value of  **ScannerMaxCPU**.    
    
    Set to **50** by default, which means that if CPU consumption in the last 30 minutes when lower than this value, the scanner will start adding new threads to scan more files in parallel, until the CPU consumption reaches the level you have set for **ScannerMaxCPU**-15. 


## Limit the number of threads used by the scanner

> [!IMPORTANT]
> When the following thread limiting policy is in use, **ScannerMaxCPU** and **ScannerMinCPU** advanced settings are ignored. To limit CPU consumption using **ScannerMaxCPU** and **ScannerMinCPU** advanced settings, cancel use of policies that limit the number of threads. 

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the scanner uses all available processor resources on the computer running the scanner service. If you need to limit the CPU consumption while this service is scanning, create the following advanced setting in a label policy. 

For the value, specify the number of concurrent threads that the scanner can run in parallel. The scanner uses a separate thread for each file that it scans, so this throttling configuration also defines the number of files that can be scanned in parallel. 

When you first configure the value for testing, we recommend you specify 2 per core, and then monitor the results. For example, if you run the scanner on a computer that has 4 cores, first set the value to 8. If necessary, increase or decrease that number, according to the resulting performance you require for the scanner computer and your scanning rates. 

- Key: **ScannerConcurrencyLevel**

- Value: **\<number of concurrent threads>**

Example PowerShell command, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{ScannerConcurrencyLevel="8"}
```

## Migrate labels from Secure Islands and other labeling solutions

This configuration uses a label [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

This configuration is not compatible with protected PDF files that have a .ppdf file name extension. These files cannot be opened by the client using File Explorer or PowerShell.

For Office documents that are labeled by Secure Islands, you can relabel these documents with a sensitivity label by using a mapping that you define. You also use this method to reuse labels from other solutions when their labels are on Office documents. 

As a result of this configuration option, the new sensitivity label is applied by the Purview Information Protection unified labeling client as follows:

- **For Office documents**: When the document is opened in the desktop app, the new sensitivity label is shown as set and is applied when the document is saved.

- **For PowerShell**: [Set-FileLabel](https://go.microsoft.com/fwlink/?linkid=2259827) and [Set-FileClassificiation](/powershell/module/azureinformationprotection/set-aipfileclassification) can apply the new sensitivity label.

- **For File Explorer**: In the Purview Information Protection dialog box, the new sensitivity label is shown but isn't set.

This configuration requires you to specify an advanced setting named **labelByCustomProperties** for each sensitivity label that you want to map to the old label. Then for each entry, set the value by using the following syntax:

```PowerShell
[migration rule name],[Secure Islands custom property name],[Secure Islands metadata Regex value]
```

Specify your choice of a migration rule name. Use a descriptive name that helps you to identify how one or more labels from your previous labeling solution should be mapped to sensitivity label.

Note that this setting does not remove the original label from the document or any visual markings in the document that the original label might have applied. To remove headers and footers, see [Remove headers and footers from other labeling solutions](#remove-headers-and-footers-from-other-labeling-solutions).

Examples:

- [Example 1: One-to-one mapping of the same label name](#example-1-one-to-one-mapping-of-the-same-label-name)
- [Example 2: One-to-one mapping for a different label name](#example-2-one-to-one-mapping-for-a-different-label-name)
- [Example 3: Many-to-one mapping of label names](#example-3-many-to-one-mapping-of-label-names)
- [Example 4: Multiple rules for the same label](#example-4-multiple-rules-for-the-same-label)

For additional customization, see:

- [Extend your label migration rules to emails](#extend-your-label-migration-rules-to-emails)
- [Extend your label migration rules to SharePoint properties](#extend-your-label-migration-rules-to-sharepoint-properties)

> [!NOTE]
> If you are migrating from your labels across tenants, such as after a company merger, we recommend that you read our [blog post on mergers and spinoffs](https://techcommunity.microsoft.com/t5/microsoft-security-and/mergers-and-spinoffs/ba-p/910455) for more information.
>

#### Example 1: One-to-one mapping of the same label name

Requirement: Documents that have a Secure Islands label of "Confidential" should be relabeled as "Confidential" by Purview Information Protection.

In this example:

- The Secure Islands label is named **Confidential** and stored in the custom property named **Classification**.

The advanced setting:

- Key: **labelByCustomProperties**

- Value: **Secure Islands label is Confidential,Classification,Confidential**

Example PowerShell command, where your label is named "Confidential":

```PowerShell
Set-Label -Identity Confidential -AdvancedSettings @{labelByCustomProperties="Secure Islands label is Confidential,Classification,Confidential"}
```

#### Example 2: One-to-one mapping for a different label name

Requirement: Documents labeled as "Sensitive" by Secure Islands should be relabeled as "Highly Confidential" by Purview Information Protection.

In this example:

- The Secure Islands label is named **Sensitive** and stored in the custom property named **Classification**.

The advanced setting:

- Key: **labelByCustomProperties**

- Value: **Secure Islands label is Sensitive,Classification,Sensitive**

Example PowerShell command, where your label is named "Highly Confidential":

```PowerShell
Set-Label -Identity "Highly Confidential" -AdvancedSettings @{labelByCustomProperties="Secure Islands label is Sensitive,Classification,Sensitive"}
```

#### Example 3: Many-to-one mapping of label names

Requirement: You have two Secure Islands labels that include the word "Internal" and you want documents that have either of these Secure Islands labels to be relabeled as "General" by the information protection client.

In this example:

- The Secure Islands labels include the word **Internal**  and are stored in the custom property named **Classification**.

The advanced client setting:

- Key: **labelByCustomProperties**

- Value: **Secure Islands label contains Internal,Classification,.\*Internal.\***

Example PowerShell command, where your label is named "General":

```PowerShell
Set-Label -Identity General -AdvancedSettings @{labelByCustomProperties="Secure Islands label contains Internal,Classification,.*Internal.*"}
```

#### Example 4: Multiple rules for the same label

When you need multiple rules for the same label, define multiple string values for the same key. 

In this example, the Secure Islands labels named "Confidential" and "Secret" are stored in the custom property named **Classification**, and you want the information protection client to apply the sensitivity label named "Confidential":

```PowerShell
Set-Label -Identity Confidential -AdvancedSettings @{labelByCustomProperties=ConvertTo-Json("Migrate Confidential label,Classification,Confidential", "Migrate Secret label,Classification,Secret")}
```

### Extend your label migration rules to emails

You can use the configuration you've defined with the [*labelByCustomProperties*](#migrate-labels-from-secure-islands-and-other-labeling-solutions) advanced setting for Outlook emails, in addition to Office documents, by specifying an additional label policy advanced setting. 

However, this setting has a known negative impact on the performance of Outlook, so configure this additional setting only when you have a strong business requirement for it and remember to set it to a null string value when you have completed the migration from the other labeling solution.

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **EnableLabelByMailHeader**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableLabelByMailHeader="True"}
```

### Extend your label migration rules to SharePoint properties

You can use the configuration you've defined with the [*labelByCustomProperties*](#migrate-labels-from-secure-islands-and-other-labeling-solutions) advanced setting for SharePoint properties that you might expose as columns to users by specifying an additional label policy advanced setting.

This setting is supported when you use Word, Excel, and PowerPoint.

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **EnableLabelBySharePointProperties**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableLabelBySharePointProperties="True"}
```

## Apply a custom property when a label is applied

This configuration uses a label [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

There might be some scenarios when you want to apply one or more custom properties to a document or email message in addition to the metadata that's applied by a sensitivity label.

For example:

- You are in the process of [migrating from another labeling solution](#migrate-labels-from-secure-islands-and-other-labeling-solutions), such as Secure Islands. For interoperability during the migration, you want sensitivity labels to also apply a custom property that is used by the other labeling solution.

- For your content management system (such as SharePoint or a document management solution from another vendor) you want to use a consistent custom property name with different values for the labels, and with user-friendly names instead of the label GUID.

For Office documents and Outlook emails that users label by using the information protection client, you can add one or more custom properties that you define. You can also use this method for the unified labeling client to display a custom property as a label from other solutions for content that isn't yet labeled by the unified labeling client.

As a result of this configuration option, any additional custom properties are applied by the information protection client as follows:

|Environment  | Description  |
|---------|---------|
|**Office documents**    | When the document is labeled in the desktop app, the additional custom properties are applied when the document is saved.        |
|**Outlook emails**     |    When the email message is labeled in Outlook, the additional properties are applied to the x-header when the email is sent.     |
|**PowerShell**     |  [Set-FileLabel](/powershell/module/azureinformationprotection/set-aipfilelabel) and [Set-FileClassificiation](/powershell/module/azureinformationprotection/set-aipfileclassification) applies the additional custom properties when the document is labeled and saved. <br><br>[Get-FileStatus](/powershell/module/azureinformationprotection/get-aipfilestatus) displays custom properties as the mapped label if a sensitivity label isn't applied.  |
|**File Explorer**     |     When the user right-clicks the file and applies the label, the custom properties are applied.     |
|     |         |


This configuration requires you to specify an advanced setting named **customPropertiesByLabel** for each sensitivity label that you want to apply the additional custom properties. Then for each entry, set the value by using the following syntax:

```sh
[custom property name],[custom property value]
```

> [!IMPORTANT]
> Use of white spaces in the string will prevent application of the labels.

For example:

- [Example 1: Add a single custom property for a label](#example-1-add-a-single-custom-property-for-a-label)
- [Example 2: Add multiple custom properties for a label](#example-2-add-multiple-custom-properties-for-a-label)
#### Example 1: Add a single custom property for a label

Requirement: Documents that are labeled as "Confidential" by the information protection client should have the additional custom property named "Classification" with the value of "Secret".

In this example:

- The sensitivity label is named **Confidential** and creates a custom property named **Classification** with the value of **Secret**.

The advanced setting:

- Key: **customPropertiesByLabel**

- Value: **Classification,Secret**

Example PowerShell command, where your label is named "Confidential":

```PowerShell
    Set-Label -Identity Confidential -AdvancedSettings @{customPropertiesByLabel="Classification,Secret"}
```

#### Example 2: Add multiple custom properties for a label

To add more than one custom property for the same label, you need to define multiple string values for the same key.

Example PowerShell command, where your label is named "General" and you want to add one custom property named **Classification** with the value of **General** and a second custom property named **Sensitivity** with the value of **Internal**:

```PowerShell
Set-Label -Identity General -AdvancedSettings @{customPropertiesByLabel=ConvertTo-Json("Classification,General", "Sensitivity,Internal")}
```

## Configure a label to apply S/MIME protection in Outlook

This configuration uses label [advanced settings](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

Use these settings only when you have a working [S/MIME deployment](/microsoft-365/security/office-365-security/s-mime-for-message-signing-and-encryption) and want a label to automatically apply this protection method for emails rather than Rights Management protection from information protection. The resulting protection is the same as when a user manually selects S/MIME options from Outlook.

|Configuration  |Key/Value  |
|---------|---------|
|**S/MIME digital signature**     |   To configure an advanced setting for an S/MIME digital signature, enter the following strings for the selected label: <br><br>- Key: **SMimeSign** <br><br>- Value: **True**      |
|**S/MIME encryption**     |   To configure an advanced setting for  S/MIME encryption, enter the following strings for the selected label:<br><br>- Key: **SMimeEncrypt**<br><br>- Value: **True**      |
|     |         |

If the label you specify is configured for encryption, for the information protection client, S/MIME protection replaces the Rights Management protection only in Outlook. The client continues to use the encryption settings specified for the label in the Microsoft 365 compliance center.

For Office apps with built-in labeling, these labels do not display to users. 

If you want the label to be visible in Outlook only, configure the **Do Not Forward** encryption option from [Let users assign permissions](/microsoft-365/compliance/encryption-sensitivity-labels#let-users-assign-permissions).


Example PowerShell commands, where your label is named "Recipients Only":

```PowerShell
Set-Label -Identity "Recipients Only" -AdvancedSettings @{SMimeSign="True"}

Set-Label -Identity "Recipients Only" -AdvancedSettings @{SMimeEncrypt="True"}
```

## Specify a default sub-label for a parent label

This configuration uses a label [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

When you add a sub-label to a label, users can no longer apply the parent label to a document or email. By default, users select the parent label to see the sub-labels that they can apply, and then select one of those sub-labels. If you configure this advanced setting, when users select the parent label, a sub-label is automatically selected and applied for them: 

- Key: **Defaultsub-labelId**

- Value: **\<sub-label GUID>**

Example PowerShell command, where your parent label is named "Confidential" and the "All Employees" sub-label has a GUID of 8faca7b8-8d20-48a3-8ea2-0f96310a848e:

```PowerShell
Set-Label -Identity "Confidential" -AdvancedSettings @{Defaultsub-labelId="8faca7b8-8d20-48a3-8ea2-0f96310a848e"}
```

## Turn on classification to run continuously in the background

This configuration uses a label [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell. 

When you configure this setting, it changes the default behavior of how the information protection client applies automatic and recommended labels to documents:

For Word, Excel, and PowerPoint, automatic classification runs continuously in the background.

The behavior does not change for Outlook.

When the information protection client periodically checks documents for the condition rules that you specify, this behavior enables automatic and recommended classification and protection for Office documents that are stored in SharePoint or OneDrive, as long as auto-save is turned on. Large files also saved more quickly because the condition rules have already run.

The condition rules do not run in real time as a user types. Instead, they run periodically as a background task if the document is modified.

To configure this advanced setting, enter the following strings:

- Key: **RunPolicyInBackground**
- Value: **True**

Example PowerShell command: 

```PowerShell
Set-LabelPolicy -Identity PolicyName -AdvancedSettings @{RunPolicyInBackground = "true"}
```

> [!NOTE]
> This feature is currently in PREVIEW. The [Azure Preview Supplemental Terms](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) include additional legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability. 
> 

## Specify a color for the label

This configuration uses label [advanced settings](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

Use this advanced setting to set a color for a label. To specify the color, enter a hex triplet code for the red, green, and blue (RGB) components of the color. For example, #40e0d0 is the RGB hex value for turquoise.

If you need a reference for these codes, you'll find a helpful table from the [\<color>](https://developer.mozilla.org/docs/Web/CSS/color_value) page from the MSDN web docs. You also find these codes in many applications that let you edit pictures. For example, Microsoft Paint lets you choose a custom color from a palette and the RGB values are automatically displayed, which you can then copy.

To configure the advanced setting for a label's color, enter the following strings for the selected label:

- Key: **color**

- Value: **\<RGB hex value>**

Example PowerShell command, where your label is named "Public":

```PowerShell
Set-Label -Identity Public -AdvancedSettings @{color="#40e0d0"}
```

## Sign in as a different user

Signing in with multiple users is not supported by Purview Information Protection in production. This procedure describes how to sign in as a different user for testing purposes only.

You can verify which account you're currently signed in as by using the **Microsoft Purview Information Protection** dialog box: Open an Office application and on the **Home** tab, select the **Sensitivity** button, and then select **Help and feedback**. Your account name is displayed in the **Client status** section.

Be sure to also check the domain name of the signed in account that's displayed. It can be easy to miss that you're signed in with the right account name but wrong domain. A symptom of using the wrong account includes failing to download the labels, or not seeing the labels or behavior that you expect.

**To sign in as a different user**:

1. Navigate to **%localappdata%\Microsoft\MSIP** and delete the **TokenCache** file.

2. Restart any open Office applications and sign in with your different user account. If you do not see a prompt in your Office application to sign in to the Microsoft Purview Information Protection service, return to the **Microsoft Purview Information Protection** dialog box and select **Sign in** from the updated **Client status** section.

Additionally:

|Scenario  |Description  |
|---------|---------|
|**Still signed in to the old account**     |  If the information protection client is still signed in with the old account after completing these steps, delete all cookies from Internet Explorer, and then repeat steps 1 and 2.       |
|**Using single sign-on**    |    If you are using single sign-on, you must sign out from Windows and sign in with your different user account after deleting the token file. <br><br>The information protection client then automatically authenticates by using your currently signed in user account.     |
|**Different tenants**     |  This solution is supported for signing in as another user from the same tenant. It is not supported for signing in as another user from a different tenant. <br><br>To test information protection with multiple tenants, use different computers.       |
|**Reset settings**     | You can use the **Reset settings** option from **Help and Feedback** to sign out and delete the currently downloaded labels and policy settings from the Microsoft 365 compliance center.        |
|     |         |

## Support for disconnected computers

> [!IMPORTANT]
> Disconnected computers are supported for the following labeling scenarios: File Explorer, PowerShell, your Office apps and the scanner.

By default, the information protection client automatically tries to connect to the internet to download the labels and label policy settings from the Microsoft 365 compliance center. 

If you have computers that cannot connect to the internet for a period of time, you can export and copy files that manually manages the policy for the unified labeling client.

**To support disconnected computers from the unified labeling client**:

1. Choose or create a user account in Azure AD that you will use to download labels and policy settings that you want to use on your disconnected computer.

2. As an additional label policy setting for this account, [turn off sending audit data to Purview Information Protection analytics](#prevent-audit-data-from-being-sent-to-aip-and-microsoft-365-analytics).
    
    We recommend this step because if the disconnected computer does have periodic internet connectivity, it will send logging information to Purview Information Protection analytics that includes the user name from step 1. That user account might be different from the local account you're using on the disconnected computer.

3. From a computer with internet connectivity that has the unified labeling client installed and signed in with the user account from step 1, download the labels and policy settings.

4. From this computer, export the log files.
    
    For example, run the [Export-Logs](/powershell/module/azureinformationprotection/export-aiplogs) cmdlet, or use the **Export Logs** option from the client's [Help and Feedback](clientv2-admin-guide.md#installing-and-supporting-the-azure-information-protection-unified-labeling-client) dialog box. 
    
    The log files are exported as a single compressed file.

5.  Open the compressed file, and from the MSIP folder, copy any files that have an .xml file name extension.

6. Paste these files into the **%localappdata%\Microsoft\MSIP** folder on the disconnected computer.

7. If your chosen user account is one that usually connects to the internet, enable sending audit data again, by setting the **EnableAudit** value to **True**.

Be aware that if a user on this computer selects the **Reset Settings** option from [Help and feedback](clientv2-admin-guide.md#help-and-feedback-section), this action deletes the policy files and renders the client inoperable until you manually replace the files or the client connects to the internet and downloads the files.

If your disconnected computer is running the Purview Information Protection scanner, there are additional configuration steps you must take. For more information, see [Restriction: The scanner server cannot have internet connectivity](../deploy-aip-scanner-prereqs.md#restriction-the-scanner-server-cannot-have-internet-connectivity) from the scanner deployment instructions.

## Change the local logging level

By default, the information protection client writes client log files to the **%localappdata%\Microsoft\MSIP** folder. These files are intended for troubleshooting by Microsoft Support.
 
To change the logging level for these files, locate the following value name in the registry and set the value data to the required logging level:

**HKEY_CURRENT_USER\SOFTWARE\Microsoft\MSIP\LogLevel**

Set the logging level to one of the following values:

- **Off**: No local logging.

- **Error**: Errors only.

- **Warn**: Errors and warnings.

- **Info**: Minimum logging, which includes no event IDs (the default setting for the scanner).

- **Debug**: Full information.

- **Trace**: Detailed logging (the default setting for clients).

This registry setting does not change the information that's sent to Microsoft Purview Information Protection for [central reporting](../reports-aip.md).

## Skip or ignore files during scans depending on file attributes

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, the information protection scanner scans all relevant files. However, you may want to define specific files to be skipped, such as for archived files or files that have been moved. 

Enable the scanner to skip specific files based on their file attributes by using the **ScannerFSAttributesToSkip** advanced setting. In the setting value, list the file attributes that will enable the file to be skipped when they are all set to **true**. This list of file attributes uses the AND logic.

The following sample PowerShell commands illustrate how to use this advanced setting with a label named "Global".

**Skip files that are both read-only and archived**

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_READONLY, FILE_ATTRIBUTE_ARCHIVE"}
```

**Skip files that are either read-only or archived**

To use an OR logic, run the same property multiple times. For example:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_READONLY"}
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_ARCHIVE"}
```

> [!TIP]
> We recommend that you consider enabling the scanner to skip files with the following attributes:
> * FILE_ATTRIBUTE_SYSTEM
> * FILE_ATTRIBUTE_HIDDEN
> * FILE_ATTRIBUTE_DEVICE
> * FILE_ATTRIBUTE_OFFLINE
> * FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS
> * FILE_ATTRIBUTE_RECALL_ON_OPEN
> * FILE_ATTRIBUTE_TEMPORARY

For a list of all file attributes that can be defined in the **ScannerFSAttributesToSkip** advanced setting, see the [Win32 File Attribute Constants](/windows/win32/fileio/file-attribute-constants)

## Preserve NTFS owners during labeling (public preview)

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

By default, scanner, PowerShell, and File Explorer extension labeling do not preserve the NTFS owner that was defined before the labeling. 

To ensure that the NTFS owner value is preserved, set the **UseCopyAndPreserveNTFSOwner** advanced setting to **true** for the selected label policy.

> [!CAUTION]
> Define this advanced setting only when you can ensure a low-latency, reliable network connection between the scanner and the scanned repository. A network failure during the automatic labeling process can cause the file to be lost.

Sample PowerShell command, when your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{UseCopyAndPreserveNTFSOwner ="true"}
```

> [!NOTE]
> This feature is currently in PREVIEW. The [Purview Preview Supplemental Terms](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) include additional legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability. 
> 

## Customize justification prompt texts for modified labels

Customize the justification prompts that are displayed in both Office and the information protection client, when end users change classification labels on documents and emails.

For example, as an administrator, you may want to remind your users not to add any customer identifying information into this field:

:::image type="content" source="../media/justification-office.png" alt-text="Customized justification prompt text":::

To modify the default **Other** text that's displayed, use the **JustificationTextForUserText** advanced property with the [Set-LabelPolicy](/powershell/module/exchange/set-labelpolicy) cmdlet. Set the value to the text you want to use instead.

Sample PowerShell command, when your label policy is named "Global":

``` PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{JustificationTextForUserText="Other (please explain) - Do not enter sensitive info"}
```

## Customize Outlook popup messages

Information Protection administrators can customize the popup messages that appear to end users in Outlook, such as:

- Messages for blocked emails
- Warning messages that prompt users to verify the content that they're sending
- Justification messages that request users to justify the content that they're sending

> [!IMPORTANT]
> This procedure will override any settings you've already defined using the [OutlookUnlabeledCollaborationAction](#to-specify-a-different-action-for-email-messages-without-attachments) advanced property.
>
> In production, we recommend that you avoid complications by *either* using the [OutlookUnlabeledCollaborationAction](#to-specify-a-different-action-for-email-messages-without-attachments) advanced property to define your rules, *or* defining complex rules with a **json** file as defined below, but not both.
>

**To customize your Outlook popup messages**:

1. Create **.json** files, each with a rule that configures how Outlook displays popup messages to your users. For more information, see [Rule value .json syntax](#rule-value-json-syntax) and [Sample popup customization .json code](#sample-popup-customization-json-code).

1. Use PowerShell to define advanced settings that control the popup messages you're configuring. Run a separate set of commands for each rule you want to configure.

    Each set of PowerShell commands must include the name of the policy you're configuring, as well as the key and value that defines your rule.

    Use the following syntax:

    ```PowerShell
    $filedata = Get-Content "<Path to json file>"
    Set-LabelPolicy -Identity <Policy name> -AdvancedSettings @{<Key> ="$filedata"}
    ```
    Where: 

    - `<Path to json file>` is the path to the json file you created. For example: **C:\Users\msanchez\Desktop\ \dlp\OutlookCollaborationRule_1.json**.
    - `<Policy name>` is the name of the policy you want to configure. 
    - `<Key>` is a name for your rule. Use the following syntax, where **<#>** is the serial number for your rule: 
    
        `OutlookCollaborationRule_<#>` 

    For more information, see [Ordering your Outlook customization rules](#ordering-your-outlook-customization-rules) and [Rule value json syntax](#rule-value-json-syntax).

   
> [!TIP]
> For additional organization, name your file with the same string as the key used in your PowerShell command. For example, name your file **OutlookCollaborationRule_1.json**, and then also use **OutlookCollaborationRule_1** as your key.
>
> To ensure that popups are displayed even when documents are shared from outside Outlook **(File > Share > Attach a copy)**, also configure the [PostponeMandatoryBeforeSave](#remove-not-now-for-documents-when-you-use-mandatory-labeling) advanced setting.
> 

### Ordering your Outlook customization rules

AIP uses the serial number in the key you enter to determine the order in which the rules are processed. When defining the keys used for each rule, define your more restrictive rules with lower numbers, followed by less restrictive rules with higher numbers.

Once a specific rule match is found, Purview Information Protection stops processing the rules, and performs the action associated with the matching rule. (**First match - > Exit** logic)
    
**Example**:

Say you want to configure all **Internal** emails with a specific **Warning** message, but you don't generally want to block them. However, you do want to block users from sending attachments classified as **Secret**, even as **Internal** emails. 

In this scenario, order your **Block Secret** rule key, which is the more specific rule, before your more generic **Warn on Internal** rule key:
- For the **Block** message: **OutlookCollaborationRule_1**
- For the **Warn** message: **OutlookCollaborationRule_2**

### Rule value .json syntax

Define your rule's json syntax as follows:

``` JSON
"type" : "And",
"nodes" : []
```

You must have at least two nodes, the first representing your rule's condition, and the last representing the rule's action. For more information, see:

- [Rule condition syntax](#rule-condition-syntax)
- [Rule action syntax](#rule-action-syntax)

##### Rule condition syntax

Rule condition nodes must include the node type, and then the conditions themselves. 

Supported node types include:

|Node type  |Description  |
|---------|---------|
| **And**	| Performs *and* on all child nodes     |
| **Or**	|Performs *or* on all child nodes       |
| **Not**	| Performs *not* for its own child      |
| **Except**	| Returns *not* for its own child, causing it to behave as **All**        |
| **SentTo**, followed by **Domains: listOfDomains**	|Checks one of the following: <br>- If the Parent is **Except**, checks whether **All** of the recipients are in one of the domains<br>- If the Parent is anything else but **Except**, checks whether **Any** of the recipients are in one of the domains.   |
| **EMailLabel**, followed by label	| One of the following:  <br>- The label ID <br>- null, if not labeled             |
| **AttachmentLabel**, followed by **Label** and supported **Extensions**	| One of the following:  <br><br>**true**: <br>- If the Parent is **Except**, checks whether **All** of the attachments with one supported extension exists within the label<br>- 	If the Parent is anything else but **Except**, checks whether **Any** of the attachments with one supported extension exists within the label <br>- If not labeled, and **label = null** <br><br> **false**: For all other cases <br><br>**Note**: If the **Extensions** property is empty or missing, all [supported file types (extensions)](clientv2-admin-guide-file-types.md) are included in the rule.
| | |

#### Rule action syntax

Rule actions can be one of the following:

|Action  |Syntax  |Sample message  |
|---------|---------|---------|
|**Block**     |    `Block (List<language, [title, body]>)`     |    ***Email Blocked***<br /><br />  *You are about to send content classified as **Secret** to one or more untrusted recipients:*<br />*`rsinclair@contoso.com`*<br /><br />*Your organization policy does not allow this action. Consider removing these recipients or replace the content.*|
|**Warn**     | `Warn (List<language,[title,body]>)`        |  ***Confirmation Required***<br /><br />*You are about to send content classified as **General** to one or more untrusted recipients:*<br />*`rsinclair@contoso.com`*<br /><br />*Your organization policy requires confirmation for you to send this content.*       |
|**Justify**     | `Justify (numOfOptions, hasFreeTextOption, List<language, [Title, body, options1,options2….]> )` <br /><br />Including up to three options.        |  ***Justification Required*** <br /><br />*Your organization policy requires justification for you to send content classified as **General** to untrusted recipients.*<br /><br />*- I confirm the recipients are approved for sharing this content*<br />*- My manager approved sharing of this content*<br />*- Other, as explained* |
| | | |

##### Action parameters

If no parameters are provided for an action, the pop-ups will have the default text. 

All texts support the following dynamic parameters: 

|Parameter  |Description  |
|---------|---------|
| `${MatchedRecipientsList}`  | The last match for the **SentTo** conditions       |
| `${MatchedLabelName}`      | The mail/attachment **Label**, with the localized name from the policy               |
| `${MatchedAttachmentName}` | The name of the attachment from the last match for the **AttachmentLabel** condition |
| | |

> [!NOTE]
> All messages include the **Tell Me More** option, as well as the **Help** and **Feedback** dialogs.
>
> The **Language** is the **CultureName** for the locale name, such as: **English** = `en-us`; **Spanish** = `es-es`
>
> Parent-only language names are also supported, such as `en` only.
> 

### Sample popup customization .json code

The following sets of **.json** code show how you can define a variety of rules that control how Outlook displays popup messages for your users.

- [**Example 1**: Block Internal emails or attachments](#example-1-block-internal-emails-or-attachments)
- [**Example 2**: Block unclassified Office attachments](#example-2-block-unclassified-office-attachments)
- [**Example 3**: Require the user to accept sending a Confidential email or attachment](#example-3-require-the-user-to-accept-sending-a-confidential-email-or-attachment)
- [**Example 4**: Warn on mail with no label, and an attachment with a specific label](#example-4-warn-on-mail-with-no-label-and-an-attachment-with-a-specific-label)
- [**Example 5**: Prompt for a justification, with two predefined options, and an extra free-text option](#example-5-prompt-for-a-justification-with-two-predefined-options-and-an-extra-free-text-option)

#### Example 1: Block Internal emails or attachments

The following **.json** code will block emails or attachments that are classified as **Internal** from being set to external recipients.

In this example, **89a453df-5df4-4976-8191-259d0cf9560a** is the ID of the **Internal** label, and internal domains include **contoso.com** and **microsoft.com**.

Since no specific extensions are specified, all supported file types are included.

```PowerShell
{ 	
    "type" : "And", 	
    "nodes" : [ 		
        { 			
            "type" : "Except" , 			
            "node" :{ 				
                "type" : "SentTo",  				
                "Domains" : [  					
                    "contoso.com", 					
			  "microsoft.com"
                ]   			
            } 		
        },
		{ 			
            "type" : "Or", 			
            "nodes" : [ 				
                { 			
					"type" : "AttachmentLabel", 			
					"LabelId" : "89a453df-5df4-4976-8191-259d0cf9560a" 		
				},{ 					
                    "type" : "EmailLabel", 					
                    "LabelId" : "89a453df-5df4-4976-8191-259d0cf9560a" 				
                }
			]
		},		
        { 			
            "type" : "Block", 			
            "LocalizationData": { 				
                "en-us": { 				  
                    "Title": "Email Blocked", 				  
                    "Body": "The email or at least one of the attachments is classified as <Bold>${MatchedLabelName}</Bold>. Documents classified as <Bold> ${MatchedLabelName}</Bold> cannot be sent to external recipients (${MatchedRecipientsList}).<br><br>List of attachments classified as <Bold>${MatchedLabelName}</Bold>:<br><br>${MatchedAttachmentName}<br><br><br>This message will not be sent.<br>You are responsible for ensuring compliance with classification requirements as per Contoso's policies." 				
                }, 				
                "es-es": { 				  
                    "Title": "Correo electrónico bloqueado", 				  
                    "Body": "El correo electrónico o al menos uno de los archivos adjuntos se clasifica como <Bold> ${MatchedLabelName}</Bold>." 				
                } 			
            }, 			
            "DefaultLanguage": "en-us" 		
        } 	
    ] 
}
```

#### Example 2: Block unclassified Office attachments

The following **.json** code blocks unclassified Office attachments or emails from being sent to external recipients.

In the following example, the attachment list that requires labeling is:
**.doc,.docm,.docx,.dot,.dotm,.dotx,.potm,.potx,.pps,.ppsm,.ppsx,.ppt,.pptm,.pptx,.vdw,.vsd,.vsdm,.vsdx,.vss,.vssm,.vst,.vstm,.vssx,.vstx,.xls,.xlsb,.xlt,.xlsm,.xlsx,.xltm,.xltx**

```PowerShell
{ 	
    "type" : "And", 	
    "nodes" : [ 		
        { 			
            "type" : "Except" , 			
            "node" :{ 				
                "type" : "SentTo",  				
                "Domains" : [  					
                    "contoso.com", 					
			        "microsoft.com"
                ]   			
            } 		
        },
		{ 			
            "type" : "Or", 			
            "nodes" : [ 				
                { 			
					"type" : "AttachmentLabel",
					 "LabelId" : null,
					"Extensions": [
									".doc",
									".docm",
									".docx",
									".dot",
									".dotm",
									".dotx",
									".potm",
									".potx",
									".pps",
									".ppsm",
									".ppsx",
									".ppt",
									".pptm",
									".pptx",
									".vdw",
									".vsd",
									".vsdm",
									".vsdx",
									".vss",
									".vssm",
									".vst",
									".vstm",
									".vssx",
									".vstx",
									".xls",
									".xlsb",
									".xlt",
									".xlsm",
									".xlsx",
									".xltm",
									".xltx"
								 ]
					
				},{ 					
                    "type" : "EmailLabel",
					 "LabelId" : null
                }
			]
		},		
        { 			
            "type" : "Block", 			
            "LocalizationData": { 				
                "en-us": { 				  
                    "Title": "Emailed Blocked", 				  
                    "Body": "Classification is necessary for attachments to be sent to external recipients.<br><br>List of attachments that are not classified:<br><br>${MatchedAttachmentName}<br><br><br>This message will not be sent.<br>You are responsible for ensuring compliance to classification requirement as per Contoso's policies.<br><br>For MS Office documents, classify and send again.<br><br>For PDF files, classify the document or classify the email (using the most restrictive classification level of any single attachment or the email content) and send again." 				
                }, 				
                "es-es": { 				  
                    "Title": "Correo electrónico bloqueado", 				  
                    "Body": "La clasificación es necesaria para que los archivos adjuntos se envíen a destinatarios externos." 				
                } 			
            }, 			
            "DefaultLanguage": "en-us" 		
        } 	
    ] 
}
```

#### Example 3: Require the user to accept sending a Confidential email or attachment

The following example causes Outlook to display a message that warns the user that they are sending a **Confidential** email or attachment to external recipients, and also requires that the user selects **I accept**. 

This sort of warning message is technically considered to be a justification, as the user must select **I accept**.

Since no specific extensions are specified, all supported file types are included.

``` PowerShell
{ 	
    "type" : "And", 	
    "nodes" : [ 		
        { 			
            "type" : "Except" , 			
            "node" :{ 				
                "type" : "SentTo",  				
                "Domains" : [  					
                    "contoso.com", 					
			        "microsoft.com"
                ]   			
            } 		
        },
		{ 			
            "type" : "Or", 			
            "nodes" : [ 				
                { 			
					"type" : "AttachmentLabel", 			
					"LabelId" : "3acd2acc-2072-48b1-80c8-4da23e245613" 		
				},{ 					
                    "type" : "EmailLabel", 					
                    "LabelId" : "3acd2acc-2072-48b1-80c8-4da23e245613" 				
                }
			]
		},		
        { 			
            "type" : "Justify", 			
            "LocalizationData": { 				
                "en-us": { 				  
                    "Title": "Warning", 				  
                    "Body": "You are sending a document that is classified as <Bold>${MatchedLabelName}</Bold> to at least one external recipient. Please make sure that the content is correctly classified and that the recipients are entitled to receive this document.<br><br>List of attachments classified as <Bold>${MatchedLabelName}</Bold>:<br><br>${MatchedAttachmentName}<br><br><Bold>List of external email addresses:</Bold><br>${MatchedRecipientsList})<br><br>You are responsible for ensuring compliance to classification requirement as per Contoso's policies.<br><br><Bold>Acknowledgement</Bold><br>By clicking <Bold>I accept</Bold> below, you confirm that the recipient is entitled to receive the content and the communication complies with CS Policies and Standards",
					"Options": [ 						
                        "I accept"			    
                    ] 
                }, 				
                "es-es": { 				  
                    "Title": "Advertencia", 				  
                    "Body": "Está enviando un documento clasificado como <Bold>${MatchedLabelName}</Bold> a al menos un destinatario externo. Asegúrese de que el contenido esté correctamente clasificado y que los destinatarios tengan derecho a recibir este documento.",
                    "Options": [ 						
                        "Acepto"				    
                    ] 					
                } 			
            }, 			
            "HasFreeTextOption":"false", 			
            "DefaultLanguage": "en-us" 		
        } 	
    ] 
}
```

#### Example 4: Warn on mail with no label, and an attachment with a specific label

The following **.json code** causes Outlook to warn the user when they are sending an internal email has no label, with an attachment that has a specific label. 

In this example, **bcbef25a-c4db-446b-9496-1b558d9edd0e** is the ID of the attachment's label, and the rule applies to .docx, .xlsx, and .pptx files.

By default, emails that have labeled attachments do not automatically receive the same label.

```PowerShell
{ 	
    "type" : "And", 	
    "nodes" : [ 		
        { 			
            "type" : "EmailLabel",
					 "LabelId" : null			
        },
        {
          "type": "AttachmentLabel",
          "LabelId": "bcbef25a-c4db-446b-9496-1b558d9edd0e",
          "Extensions": [
                ".docx",
                ".xlsx",
                ".pptx"
             ]
        },
	{  			
            "type" : "SentTo",  			
            "Domains" : [  				
                "contoso.com", 				
            ]   		
        }, 		
        { 			
            "type" : "Warn"	
        } 	
    ] 
}
```

#### Example 5: Prompt for a justification, with two predefined options, and an extra free-text option

The following **.json** code causes Outlook to prompt the user for a justification for their action. The justification text includes two predefined options, as well as a third, free-text option.

Since no specific extensions are specified, all supported file types are included.

```PowerShell
{ 	
    "type" : "And", 	
    "nodes" : [ 		
        { 			
            "type" : "Except" , 			
            "node" :{ 				
                "type" : "SentTo",  				
                "Domains" : [  					
                    "contoso.com", 									
                ]   			
            } 		
        }, 		
        { 			
            "type" : "EmailLabel", 			
            "LabelId" : "34b8beec-40df-4219-9dd4-553e1c8904c1" 		
        }, 		
        { 			
            "type" : "Justify", 			
            "LocalizationData": { 				
                "en-us": { 					
                    "Title": "Justification Required", 					
                    "Body": "Your organization policy requires justification for you to send content classified as <Bold> ${MatchedLabelName}</Bold>,to untrusted recipients:<br>Recipients are: ${MatchedRecipientsList}", 					
                    "Options": [ 						
                        "I confirm the recipients are approved for sharing this content", 					
                        "My manager approved sharing of this content", 						
                        "Other, as explained" 				    
                    ] 				
                }, 				
                "es-es": { 				    
                    "Title": "Justificación necesaria", 				    
                    "Body": "La política de su organización requiere una justificación para que envíe contenido clasificado como <Bold> ${MatchedLabelName}</Bold> a destinatarios que no sean de confianza.", 				    
                    "Options": [ 						
                        "Confirmo que los destinatarios están aprobados para compartir este contenido.",
                        "Mi gerente aprobó compartir este contenido",
                        "Otro, como se explicó" 					
                    ] 				
                } 			
            }, 			
            "HasFreeTextOption":"true", 			
            "DefaultLanguage": "en-us" 		
        } 	
    ] 
}
```

## Configure SharePoint timeouts

By default, the timeout for SharePoint interactions is two minutes, after which the attempted AIP operation fails.

Starting in version 2.8.85.0, information protection administrators can control this timeout using the following advanced properties, using an **hh:mm:ss** syntax to define the timeouts:

- **SharepointWebRequestTimeout**. Determines the timeout for all information protection web requests to SharePoint. Default = 2 minutes.

    For example, if your policy is named **Global**, the following sample PowerShell command updates the web request timeout to 5 minutes.

    ```PowerShell
    Set-LabelPolicy -Identity Global -AdvancedSettings @{SharepointWebRequestTimeout="00:05:00"}
    ```

- **SharepointFileWebRequestTimeout**. Determines the timeout specifically for SharePoint files via information protection web requests. Default = 15 minutes

    For example, if your policy is named **Global**, the following sample PowerShell command updates the file web request timeout to 10 minutes.

    ```PowerShell
    Set-LabelPolicy -Identity Global -AdvancedSettings @{SharepointFileWebRequestTimeout="00:10:00"}
    ```

### Avoid scanner timeouts in SharePoint

If you have long file paths in SharePoint version 2013 or higher, ensure that your SharePoint server's [httpRuntime.maxUrlLength](/dotnet/api/system.web.configuration.httpruntimesection.maxurllength) value is larger than the default 260 characters.

This value is defined in the **HttpRuntimeSection** class of the `ASP.NET` configuration. 

**To update the HttpRuntimeSection class**:

1. Back up your **web.config** configuration. 

1. Update the **maxUrlLength** value as needed. For example:

    ```c#
    <httpRuntime maxRequestLength="51200" requestValidationMode="2.0" maxUrlLength="5000"  />
    ```

1. Restart your SharePoint web server and verify that it loads correctly. 

    For example, in Windows Internet Information Servers (IIS) Manager, select your site, and then under **Manage Website**, select **Restart**. 

## Prevent Outlook performance issues with S/MIME emails

Performance issues may occur in Outlook when the S/MIME emails are opened in Reading Pane. To prevent these issues, enable the **OutlookSkipSmimeOnReadingPaneEnabled** advanced property. 

Enabling this property prevents the information protection bar and the email classifications from being shown in the Reading Pane.

For example, if your policy is named **Global**, the following sample PowerShell command enables the **OutlookSkipSmimeOnReadingPaneEnabled** property:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OutlookSkipSmimeOnReadingPaneEnabled="true"}
```

## Turn off document tracking features

By default, document tracking features are turned on for your tenant. To turn them off, such as for privacy requirements in your organization or region, set the **EnableTrackAndRevoke** value to **False**.

Once turned off, document tracking data will not longer be available in your organization, and users will no longer see the [**Revoke**](revoke-access-user.md#revoke-access-from-microsoft-office-apps) menu option in their Office apps.

For the selected label policy, specify the following strings:

- Key: **EnableTrackAndRevoke**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableTrackAndRevoke="False"}
```

After setting this value to **False**, track and revoke is turned off as follows: 

- Opening protected documents with the information protection client no longer registers the documents for track and revoke.
- End users will no longer see the [**Revoke**](revoke-access-user.md#revoke-access-from-microsoft-office-apps) menu option in their Office apps.

However, protected documents that are already registered for tracking will continue to be track, and administrators can still revoke access from PowerShell. To fully turn off track and revoke features, also run the [Disable-AipServiceDocumentTrackingFeature](/powershell/module/aipservice/disable-aipservicedocumenttrackingfeature) cmdlet.

This configuration uses a policy [advanced setting](#configuring-advanced-settings-for-the-client-via-powershell) that you must configure by using Office 365 Security & Compliance Center PowerShell.

> [!TIP]
> To turn track and revoke back on, set the **EnableTrackAndRevoke** to **True**, and also run the [Enable-AipServiceDocumentTrackingFeature](/powershell/module/aipservice/enable-aipservicedocumenttrackingfeature) cmdlet.
>

## Turn off the Revoke option for end-users in Office apps

If you do not want end-users to have the ability to revoke access to protected documents from their Office apps, you can remove the **Revoke Access** option from your Office apps.

> [!NOTE]
> Removing the **Revoke Access** option continues to keep your protected documents tracked in the background, and retains the admin ability to revoke access to documents [via PowerShell](/powershell/module/aipservice/set-aipservicedocumentrevoked).
> 

For the selected label policy, specify the following strings:

- Key: **EnableRevokeGuiSupport**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableRevokeGuiSupport="False"}
```


## Configure the autolabeling timeout on Office files

By default, the scanner's autolabeling timeout on Office files is 3 seconds.

If you have a complex Excel file with many sheets or rows, 3 seconds may not be enough to automatically apply labels. To increase this timeout for the selected label policy, specify the following strings:

- Key: **OfficeContentExtractionTimeout**

- Value: Seconds, in the following format: `hh:mm:ss`. 

> [!IMPORTANT]
> We recommend that you do not raise this timeout to higher than 15 seconds.
> 

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OfficeContentExtractionTimeout="00:00:15"}
```

The updated timeout applies to autolabeling on all Office files.

## Turn on classification globalization features (Public preview)

[Classification globalization features](unifiedlabelingclient-version-release-history.md#increased-accuracy-for-sensitive-information-types), including increased accuracy for East Asian languages and support for double-byte characters. These enhancements are provided only for 64-bit processes, and are turned off by default.

Turn on these features for your policy specify the following strings:

- Key: **EnableGlobalization**

- Value: `True`

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableGlobalization="True"}
```

To turn off support again and revert to the default, set the **EnableGlobalization** advanced setting to an empty string.

## Next steps

Now that you've customized the information protection client, see the following resources for additional information that you might need to support this client:

- [Client files and usage logging](clientv2-admin-guide-files-and-logging.md)

- [File types supported](clientv2-admin-guide-file-types.md)

- [PowerShell commands](clientv2-admin-guide-powershell.md)