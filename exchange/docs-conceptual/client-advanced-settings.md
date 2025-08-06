---
title: PowerShell advanced settings for Microsoft Purview Information Protection client
ms.author: yangczhang
author: zhang-yangchen
manager: aashishr
ms.date: 04/17/2024
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: purview
ms.reviewer:
ms.localizationpriority: high
ms.collection:
- tier3
- purview-compliance
search.appverid:
description: "Security & Compliance PowerShell advanced settings for Microsoft Purview Information Protection client."
---

# Advanced settings for Microsoft Purview Information Protection client

This article contains the [Security & Compliance PowerShell](/powershell/exchange/office-365-scc/office-365-scc-powershell) advanced settings that are supported by [Microsoft Purview Information Protection client](/purview/information-protection-client) when you use the following cmdlets:

- [New-Label](/powershell/module/exchangepowershell/new-label) or [Set-Label](/powershell/module/exchangepowershell/set-label)
- [New-LabelPolicy](/powershell/module/exchangepowershell/new-labelpolicy) or [Set-LabelPolicy](/powershell/module/exchangepowershell/set-labelpolicy)

The advanced settings that are supported by sensitivity labels built into Microsoft 365 apps and services are included on the cmdlet page itself. You might also find useful [PowerShell tips for specifying the advanced settings](/purview/create-sensitivity-labels#powershell-tips-for-specifying-the-advanced-settings).

|Advanced settings for labels|Description|
|---|---|
|[Color](#color)|Specify a color for the label|
|[DefaultSubLabelId](#defaultsublabelid)|Specify a default sublabel for a parent label|

|Advanced settings for label policies|Description|
|---|---|
|[AdditionalPPrefixExtensions](#additionalpprefixextensions)|Support for changing \<EXT>.PFILE to P\<EXT>|
|[EnableAudit](#enableaudit)|Prevent audit data from being sent to Microsoft Purview|
|[EnableContainerSupport](#enablecontainersupport)|Enable removal of encryption from PST, rar, 7zip, and MSG files|
|[EnableCustomPermissions](#enablecustompermissions)|Turn off custom permissions in File Explorer|
|[EnableCustomPermissionsForCustomProtectedFiles](#enablecustompermissionsforcustomprotectedfiles)|For files encrypted with custom permissions, always display custom permissions to users in File Explorer|
|[EnableGlobalization](#enableglobalization) |Turn on classification globalization features|
|[JustificationTextForUserText](#justificationtextforusertext) |Customize justification prompt texts for modified labels|
|[LogMatchedContent](#logmatchedcontent)|Send information type matches to Microsoft Purview|
|[OfficeContentExtractionTimeout](#officecontentextractiontimeout)|Configure the auto-labeling timeout for Office files|
|[PFileSupportedExtensions](#pfilesupportedextensions)|Change which file types to protect|
|[ReportAnIssueLink](#reportanissuelink) |Add "Report an Issue" for users|
|[ScannerMaxCPU](#scannermaxcpu) |Limit CPU consumption|
|[ScannerMinCPU](#scannermincpu) |Limit CPU consumption|
|[ScannerConcurrencyLevel](#scannerconcurrencylevel)|Limit the number of threads used by the scanner|
|[ScannerFSAttributesToSkip](#scannerfsattributestoskip) |Skip or ignore files during scans depending on file attributes)
|[SharepointWebRequestTimeout](#sharepointwebrequesttimeout)|Configure SharePoint timeouts|
|[SharepointFileWebRequestTimeout](#sharepointfilewebrequesttimeout )|Configure SharePoint timeouts|
|[UseCopyAndPreserveNTFSOwner](#usecopyandpreserventfsowner) |Preserve NTFS owners during labeling|

## AdditionalPPrefixExtensions

This advanced property to change \<EXT>.PFILE to P\<EXT> is supported by File Explorer, PowerShell, and by the scanner. All apps have similar behavior.

- Key: **AdditionalPPrefixExtensions**

- Value: **\<string value>**

Use the following table to identify the string value to specify:

| String value| Client and scanner|
|---|---|
|\*|All PFile extensions become P\<EXT>|
|\<null value>| Default value behaves like the default encryption value.|
|ConvertTo-Json(".dwg", ".zip")|In addition to the previous list, ".dwg" and ".zip" become P\<EXT>|

With this setting, the following extensions always become **P\<EXT>**: ".txt", ".xml", ".bmp", ".jt", ".jpg", ".jpeg", ".jpe", ".jif", ".jfif", ".jfi", ".png", ".tif", ".tiff", ".gif"). Notable exclusion is that "ptxt" does not become "txt.pfile".

This setting requires the advanced setting *PFileSupportedExtension* to be enabled.

**Example 1**: PowerShell command to behave like the default behavior where Protect ".dwg" becomes ".dwg.pfile":

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions =""}
```

**Example 2**: PowerShell command to change all PFile extensions from generic encryption to native encryption when the files are labeled and encrypted:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions ="*"}
```

**Example 3**: PowerShell command to change ".dwg" to ".pdwg" when using this service protect this file:

```PowerShell
Set-LabelPolicy -AdvancedSettings @{ AdditionalPPrefixExtensions =ConvertTo-Json(".dwg")}
```

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

## EnableAudit

By default, the information protection client sends audit data to Microsoft Purview where you can view this data in [activity explorer](/purview/data-classification-activity-explorer).

To change this behavior, use the following advanced setting:

- Key: **EnableAudit**

- Value: **False**

For example, if your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableAudit="False"}
```

Then on local computers that run the information protection client, delete the following folder: **%localappdata%\Microsoft\MSIP\mip**

To enable the client to send audit log data again, change the advanced setting value to **True**. You do not need to manually create the **%localappdata%\Microsoft\MSIP\mip** folder again on your client computers.

## EnableContainerSupport

This setting enables the information protection client to remove encryption from PST, rar, and 7zip files.

- Key: **EnableContainerSupport**

- Value: **True**

For example, if your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableContainerSupport="True"}
```

## EnableCustomPermissions

By default, users see an option named **Protect with custom permissions** when they right-click in File Explorer with the file labeler. This option lets them set their own encryption settings that can override any encryption settings that you might have included with a label configuration. Users can also see an option to remove encryption. When you configure this setting, users do not see these options.

Use the following setting so users don't see these options:

- Key: **EnableCustomPermissions**

- Value: **False**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissions="False"}
```

## EnableCustomPermissionsForCustomProtectedFiles

When you configure the advanced client setting *EnableCustomPermissions* to turn off custom permissions in File Explorer, by default, users are not able to see or change custom permissions that are already set in an encrypted document.

However, there's another advanced client setting that you can specify so that in this scenario, users can see and change custom permissions for an encrypted document when they use File Explorer and right-click the file.

- Key: **EnableCustomPermissionsForCustomProtectedFiles**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableCustomPermissionsForCustomProtectedFiles="True"}
```

## EnableGlobalization

Classification globalization features including increased accuracy for East Asian languages and support for double-byte characters. These enhancements are provided only for 64-bit processes, and are turned off by default.

Turn on these features for your policy specify the following strings:

- Key: **EnableGlobalization**

- Value: `True`

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{EnableGlobalization="True"}
```

To turn off support again and revert to the default, set the **EnableGlobalization** advanced setting to an empty string.

## JustificationTextForUserText

Customize the justification prompts that are displayed when end users change sensitivity labels on files.

For example, as an administrator, you might want to remind your users not to add any customer identifying information into this field.

To modify the default **Other** option that users can select in the dialog box, use the *JustificationTextForUserText* advanced setting. Set the value to the text you want to use instead.

Example PowerShell command, where your label policy is named "Global":

``` PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{JustificationTextForUserText="Other (please explain) - Do not enter sensitive info"}
```

## LogMatchedContent

By default, the information protection client doesn't send content matches for sensitive info types to Microsoft Purview, which can then be displayed in [activity explorer](/purview/data-classification-activity-explorer). The scanner always sends this information. For more information about this additional information that can be sent, see [Content matches for deeper analysis](/azure/information-protection/reports-aip#content-matches-for-deeper-analysis).

To send content matches when sensitive information types are sent, use the following advanced setting in a label policy:

- Key: **LogMatchedContent**

- Value: **True**

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{LogMatchedContent="True"}
```

## OfficeContentExtractionTimeout

By default, the scanner's auto-labeling timeout on Office files is 3 seconds.

If you have a complex Excel file with many sheets or rows, 3 seconds might not be enough to automatically apply labels. To increase this timeout for the selected label policy, specify the following strings:

- Key: **OfficeContentExtractionTimeout**

- Value: Seconds, in the following format: `hh:mm:ss`.

> [!IMPORTANT]
> We recommend that you don't raise this timeout to higher than 15 seconds.

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{OfficeContentExtractionTimeout="00:00:15"}
```

The updated timeout applies to auto-labeling on all Office files.

## PFileSupportedExtensions

With this setting, you can change which file types are encrypted but you cannot change the default encryption level from native to generic. For example, for users running the file labeler, you can change the default setting so that only Office files and PDF files are encrypted instead of all file types. But you cannot change these file types to be generically encrypted with a .pfile file name extension.

- Key: **PFileSupportedExtensions**

- Value: **\<string value>**

Use the following table to identify the string value to specify:

| String value|Client|Scanner|
|---|---|---|
|\*|Default value: Apply encryption to all file types|Apply encryption to all file types|
|ConvertTo-Json(".jpg", ".png")|In addition to Office file types and PDF files, apply encryption to the specified file name extensions | In addition to Office file types and PDF files, apply encryption to the specified file name extensions

**Example 1**: PowerShell command for the scanner to encrypt all file types, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{PFileSupportedExtensions="*"}
```

**Example 2**: PowerShell command for the scanner to encrypt .txt files and .csv files in addition to Office files and PDF files, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{PFileSupportedExtensions=ConvertTo-Json(".txt", ".csv")}
```

## ReportAnIssueLink

When you specify the following advanced client setting, users see a **Report an Issue** option that they can select from the **Help and Feedback** client dialog box in the file labeler. Specify an HTTP string for the link. For example, a customized web page that you have for users to report issues, or an email address that goes to your help desk.

To configure this advanced setting, enter the following strings for the selected label policy:

- Key: **ReportAnIssueLink**

- Value: **\<HTTP string>**

Example value for a website: `https://support.contoso.com`

Example value for an email address: `mailto:helpdesk@contoso.com`

Example PowerShell command, where your label policy is named "Global":

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ReportAnIssueLink="mailto:helpdesk@contoso.com"}
```

## ScannerMaxCPU

> [!IMPORTANT]
> We recommend limiting CPU consumption by using the advanced settings *ScannerMaxCPU* and *ScannerMinCPU* instead of *ScannerConcurrencyLevel* that's supported for backwards compatibility.
>
> If the older advanced setting is specified,*ScannerMaxCPU* and *ScannerMinCPU* advanced settings are ignored.

Use this advanced setting in conjunction with *ScannerMinCPU* to limit CPU consumption on the scanner computer.

- Key: **ScannerMaxCPU**

- Value: \<number>**

The value is set to **100** by default, which means there is no limit of maximum CPU consumption. In this case, the scanner process tries to use all available CPU time to maximize your scan rates.

If you set **ScannerMaxCPU** to less than 100, the scanner monitors the CPU consumption over the last 30 minutes. If the average CPU crossed the limit you set, it starts to reduce the number of threads allocated for new files.

The limit on the number of threads continues as long as CPU consumption is higher than the limit set for **ScannerMaxCPU**.

## ScannerMinCPU

> [!IMPORTANT]
> We recommend limiting CPU consumption by using the advanced settings *ScannerMaxCPU* and *ScannerMinCPU* instead of *ScannerConcurrencyLevel* that's supported for backwards compatibility.
>
> If the older advanced setting is specified,*ScannerMaxCPU* and *ScannerMinCPU* advanced settings are ignored.

Used only if *ScannerMaxCPU* is not equal to 100, and cannot be set to a number that is higher than the **ScannerMaxCPU** value.

We recommend keeping **ScannerMinCPU** set at least 15 points lower than the value of *ScannerMaxCPU*.

The value is set to **50** by default, which means that if CPU consumption in the last 30 minutes when lower than this value, the scanner starts adding new threads to scan more files in parallel, until the CPU consumption reaches the level you have set for *ScannerMaxCPU*-15.

## ScannerConcurrencyLevel

> [!IMPORTANT]
> We recommend limiting CPU consumption by using the advanced settings *ScannerMaxCPU* and *ScannerMinCPU* instead of *ScannerConcurrencyLevel* that's supported for backwards compatibility.
>
> When this older advanced setting is specified,*ScannerMaxCPU* and *ScannerMinCPU* advanced settings are ignored.

By default, the scanner uses all available processor resources on the computer running the scanner service. If you need to limit the CPU consumption while this service is scanning, specify the number of concurrent threads that the scanner can run in parallel. The scanner uses a separate thread for each file that it scans, so this throttling configuration also defines the number of files that can be scanned in parallel.

When you first configure the value for testing, we recommend you specify 2 per core, and then monitor the results. For example, if you run the scanner on a computer that has 4 cores, first set the value to 8. If necessary, increase or decrease that number, according to the resulting performance you require for the scanner computer and your scanning rates.

- Key: **ScannerConcurrencyLevel**

- Value: **\<number of concurrent threads>**

Example PowerShell command, where your label policy is named "Scanner":

```PowerShell
Set-LabelPolicy -Identity Scanner -AdvancedSettings @{ScannerConcurrencyLevel="8"}
```

## ScannerFSAttributesToSkip

By default, the information protection scanner scans all relevant files. However, you might want to define specific files to be skipped, such as for archived files or files that have been moved.

Enable the scanner to skip specific files based on their file attributes by using the **ScannerFSAttributesToSkip** advanced setting. In the setting value, list the file attributes that enable the file to be skipped when they are all set to **true**. This list of file attributes uses the AND logic.

Example PowerShell commands, where your label policy is named "Global".

**Skip files that are both read-only and archived**:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_READONLY, FILE_ATTRIBUTE_ARCHIVE"}
```

**Skip files that are either read-only or archived**:

To use an OR logic, run the same property multiple times. For example:

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_READONLY"}
Set-LabelPolicy -Identity Global -AdvancedSettings @{ ScannerFSAttributesToSkip =" FILE_ATTRIBUTE_ARCHIVE"}
```

> [!TIP]
> We recommend that you consider enabling the scanner to skip files with the following attributes:
>
> - FILE_ATTRIBUTE_SYSTEM
> - FILE_ATTRIBUTE_HIDDEN
> - FILE_ATTRIBUTE_DEVICE
> - FILE_ATTRIBUTE_OFFLINE
> - FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS
> - FILE_ATTRIBUTE_RECALL_ON_OPEN
> - FILE_ATTRIBUTE_TEMPORARY

For a list of all file attributes that can be defined in the **ScannerFSAttributesToSkip** advanced setting, see the [Win32 File Attribute Constants](/windows/win32/fileio/file-attribute-constants)

## SharepointWebRequestTimeout

By default, the timeout for SharePoint interactions is two minutes, after which the attempted information protection client operation fails. Control this timeout using the *SharepointWebRequestTimeout* and *SharepointFileWebRequestTimeout* advanced settings, using an **hh:mm:ss** syntax to define the timeouts.

Specify a value to determine the timeout for all information protection client web requests to SharePoint. The default is minutes.

For example, if your policy is named **Global**, the following sample PowerShell command updates the web request timeout to 5 minutes.

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{SharepointWebRequestTimeout="00:05:00"}
```

## SharepointFileWebRequestTimeout

By default, the timeout for SharePoint interactions is two minutes, after which the attempted information protection client operation fails. Control this timeout using the *SharepointWebRequestTimeout* and *SharepointFileWebRequestTimeout* advanced settings, using an **hh:mm:ss** syntax to define the timeouts.

Specify the timeout value for SharePoint files via information protection client web requests. The default is 15 minutes.

For example, if your policy is named **Global**, the following sample PowerShell command updates the file web request timeout to 10 minutes.

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{SharepointFileWebRequestTimeout="00:10:00"}
```

## UseCopyAndPreserveNTFSOwner

> [!NOTE]
> This feature is currently in PREVIEW. The [Azure Preview Supplemental Terms](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) include additional legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

By default, the information protection client doesn't preserve the NTFS owner that was defined before applying a sensitivity label.

To ensure that the NTFS owner value is preserved, set the *UseCopyAndPreserveNTFSOwner* advanced setting to **true** for the selected label policy.

> [!CAUTION]
> For the scanner: Define this advanced setting only when you can ensure a low-latency, reliable network connection between the scanner and the scanned repository. A network failure during the automatic labeling process can cause the file to be lost.

Example PowerShell command, where your label policy is named "Global"

```PowerShell
Set-LabelPolicy -Identity Global -AdvancedSettings @{UseCopyAndPreserveNTFSOwner ="true"}
```
