---
title: PowerShell advanced settings for Microsoft Purview Information Protection client
ms.author: cabailey
author: cabailey
manager: aashishr
ms.date: 04/15/2024
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: high
ms.collection: 
ms.custom:
search.appverid: 
description: "Security & Compliance PowerShell advanced settings for Microsoft Purview Information Protection client."
---

# Advanced settings for Microsoft Purview Information Protection client

This article contains the [Security & Compliance PowerShell](/powershell/exchange/office-365-scc/office-365-scc-powershell) advanced settings that are supported by [Microsoft Purview Information Protection client](/purview/information-protection-client) when you use the following cmdlets:

- [New-Label](/powershell/module/exchange/new-label) or [Set-Label](/powershell/module/exchange/set-label)
- [New-LabelPolicy](/powershell/module/exchange/new-labelpolicy) or [Set-LabelPolicy](/powershell/module/exchange/set-labelpolicy).

The advanced settings that are supported by sensitivity labels that are built into Microsoft 365 apps and services are included with the cmdlet page itself.

You might also useful [PowerShell tips for specifying the advanced settings](/purview/create-sensitivity-labels#powershell-tips-for-specifying-the-advanced-settings).

**Advanced settings for sensitivity labels:**

Use the *AdvancedSettings* parameter with [New-Label](/powershell/module/exchange/policy-and-compliance/new-label) and [Set-Label](/powershell/module/exchange/policy-and-compliance/set-label).

|Setting|Scenario and instructions|
|----------------|---------------|
|**color**|[Specify a color for the label](#specify-a-color-for-the-label)|
|**DefaultSubLabelId**|[Specify a default sublabel for a parent label](#specify-a-default-sublabel-for-a-parent-label) 

**Advanced settings for sensitivity label policies:**

Use the *AdvancedSettings* parameter with [New-LabelPolicy](/powershell/module/exchange/policy-and-compliance/new-labelpolicy) and [Set-LabelPolicy](/powershell/module/exchange/policy-and-compliance/set-labelpolicy).

|Setting|Scenario and instructions|
|----------------|---------------|
|**AdditionalPPrefixExtensions**|[Support for changing \<EXT>.PFILE to P\<EXT>](#additionalpprefixextensions)
|**EnableAudit**|[Prevent audit data from being sent to Microsoft Purview](#prevent-audit-data-from-being-sent-to-aip-and-microsoft-365-analytics)|
|**EnableContainerSupport**|[Enable removal of encryption from PST, rar, 7zip, and MSG files](#enable-removal-of-protection-from-compressed-files)
|**EnableCustomPermissions**|[Turn off custom permissions in File Explorer](#turn-off-custom-permissions-in-file-explorer)|
|**EnableCustomPermissionsForCustomProtectedFiles**|[For files encrypted with custom permissions, always display custom permissions to users in File Explorer](#for-files-protected-with-custom-permissions-always-display-custom-permissions-to-users-in-file-explorer) |
|**EnableGlobalization** |[Turn on classification globalization features](#turn-on-classification-globalization-features-public-preview) |
|**EnableOutlookDistributionListExpansion** |[Expand Outlook distribution lists when searching for email recipients](#expand-outlook-distribution-lists-when-searching-for-email-recipients) |
|**JustificationTextForUserText** | [Customize justification prompt texts for modified labels](#customize-justification-prompt-texts-for-modified-labels) |
|??**LogMatchedContent**|[Send information type matches to Azure Information Protection analytics](#send-information-type-matches-to-azure-information-protection-analytics)|
|**PFileSupportedExtensions**|[Change which file types to protect](#change-which-file-types-to-protect)|
|**ReportAnIssueLink**|[Add "Report an Issue" for users](#add-report-an-issue-for-users)|
|**ScannerMaxCPU** |[Limit CPU consumption](#limit-cpu-consumption) |
|**ScannerMinCPU** |[Limit CPU consumption](#limit-cpu-consumption) |
|**ScannerConcurrencyLevel**|[Limit the number of threads used by the scanner](#limit-the-number-of-threads-used-by-the-scanner)|
|**ScannerFSAttributesToSkip** |[Skip or ignore files during scans depending on file attributes](#skip-or-ignore-files-during-scans-depending-on-file-attributes)
|**SharepointWebRequestTimeout**|[Configure SharePoint timeouts](#configure-sharepoint-timeouts)|
|**SharepointFileWebRequestTimeout**|[Configure SharePoint timeouts](#configure-sharepoint-timeouts)|
|**UseCopyAndPreserveNTFSOwner** |[Preserve NTFS owners during labeling](#preserve-ntfs-owners-during-labeling-public-preview)


## Color

Use this advanced setting to set a color for a label. To specify the color, enter a hex triplet code for the red, green, and blue (RGB) components of the color. For example, #40e0d0 is the RGB hex value for turquoise.

If you need a reference for these codes, you'll find a helpful table from the [\<color>](https://developer.mozilla.org/docs/Web/CSS/color_value) page from the MSDN web docs. You also find these codes in many applications that let you edit pictures. For example, Microsoft Paint lets you choose a custom color from a palette and the RGB values are automatically displayed, which you can then copy.

To configure the advanced setting for a label's color, enter the following strings for the selected label:

- Key: **color**

- Value: **\<RGB hex value>**

Example PowerShell command, where your label is named "Public":

```PowerShell
Set-Label -Identity Public -AdvancedSettings @{color="#40e0d0"}
```

## DefaultSubLabelId

When you add a sublabel to a label, users can no longer apply the parent label to a document or email. By default, users select the parent label to see the sublabels that they can apply, and then select one of those sublabels. If you configure this advanced setting, when users select the parent label, a sublabel is automatically selected and applied for them: 

- Key: **DefaultSubLabelId**

- Value: **\<sublabel GUID>**

Example PowerShell command, where your parent label is named "Confidential" and the "All Employees" sublabel has a GUID of 8faca7b8-8d20-48a3-8ea2-0f96310a848e:

```PowerShell
Set-Label -Identity "Confidential" -AdvancedSettings @{DefaultSubLabelId="8faca7b8-8d20-48a3-8ea2-0f96310a848e"}
```

-----

## AdditionalPPrefixExtensions

This advanced property to change \<EXT>.PFILE to P\<EXT> is supported by File Explorer, PowerShell, and by the scanner. All apps have similar behavior.   

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

**Example 2**:  PowerShell command to change all PFile extensions from generic encryption (dwg.pfile) to native encryption (.pdwg) when the files are protected:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions ="*"}
```

**Example 3**: PowerShell command to change ".dwg"  to ".pdwg" when using this service protect this file:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions =ConvertTo-Json(".dwg")}
```

## EnableAudit

By default, the information protection clients sends audit data to Microsoft Purview where you can view this data in [activity explorer](/purview/data-classification-activity-explorer).

To change this behavior, use the following advanced setting:

- Key: **EnableAudit**

- Value: **False**

For example, if your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableAudit="False"}
```

Then on local computers that run the information protection client, delete the following folder: **%localappdata%\Microsoft\MSIP\mip**

To enable the client to send audit log data again, change the advanced setting value to **True**. You do not need to manually create the **%localappdata%\Microsoft\MSIP\mip** folder again on your client computers.




