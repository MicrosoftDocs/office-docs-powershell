---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-safelinkspolicy
applicable: Exchange Online
title: Set-SafeLinksPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-SafeLinksPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-SafeLinksPolicy cmdlet to modify Safe Links policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SafeLinksPolicy [-Identity] <SafeLinksPolicyIdParameter>
 [-AdminDisplayName <String>]
 [-AllowClickThrough <Boolean>]
 [-Confirm]
 [-CustomNotificationText <String>]
 [-DeliverMessageAfterScan <Boolean>]
 [-DisableUrlRewrite <Boolean>]
 [-DoNotRewriteUrls <MultiValuedProperty>]
 [-EnableForInternalSenders <Boolean>]
 [-EnableOrganizationBranding <Boolean>]
 [-EnableSafeLinksForEmail <Boolean>]
 [-EnableSafeLinksForOffice <Boolean>]
 [-EnableSafeLinksForTeams <Boolean>]
 [-ScanUrls <Boolean>]
 [-TrackClicks <Boolean>]
 [-UseTranslatedNotificationText <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Microsoft Defender for Office 365 that checks links to see if they lead to malicious web sites. When a user clicks a link, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SafeLinksPolicy -Identity "Engineering Block URL" -AllowClickThrough $false
```

This example modifies the existing Safe Links policy named Engineering Block URL to not allow click through to the original URLs on warning pages.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Links policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowClickThrough
The AllowClickThrough parameter specifies whether to allow users to click through to the original URL on warning pages. Valid values are:

$true: The user is allowed to click through to the original URL.
$false: The user isn't allowed to click through to the original URL.

In PowerShell, the default value is $false. In new Safe Links policies created in the Microsoft Defender portal, the default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomNotificationText
The custom notification text specifies the customized notification text to show to users. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliverMessageAfterScan
The DeliverMessageAfterScan parameter specifies whether to deliver email messages only after Safe Links scanning is complete. Valid values are:

- $true: Wait until Safe Links scanning is complete before delivering the message. This is the default value. Messages that contain malicious links are not delivered.
- $false: If Safe Links scanning can't complete, deliver the message anyway.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableUrlRewrite
The DisableUrlRewrite parameter specifies whether to rewrite (wrap) URLs in email messages. Valid values are:

- $true: URLs in messages are not rewritten, but messages are still scanned by Safe Links prior to delivery. Time of click checks on links are done using the Safe Links API in supported Outlook clients (currently, Outlook for Windows and Outlook for Mac).
- $false: URLs in messages are rewritten. API checks still occur on unwrapped URLs in supported clients if the user is in a valid Safe Links policy.

In PowerShell, the default value is $false. In new Safe Links policies created in the Microsoft Defender portal, the default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotRewriteUrls
The DoNotRewriteUrls parameter specifies the URLs that are not rewritten by Safe Links scanning. The list of entries allows users who are included in the policy to access the specified URLs that would otherwise be blocked by Safe Links.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

For details about the entry syntax, see [Entry syntax for the "Do not rewrite the following URLs" list](https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-links-about#entry-syntax-for-the-do-not-rewrite-the-following-urls-list).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableForInternalSenders
The EnableForInternalSenders parameter specifies whether the Safe Links policy is applied to messages sent between internal senders and internal recipients within the same Exchange Online organization. Valid values are:

- $true: The policy is applied to internal and external senders. This is the default value.
- $false: The policy is applied only to external senders.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOrganizationBranding
The EnableOrganizationBranding parameter specifies whether your organization's logo is displayed on Safe Links warning and notification pages. Valid values are:

- $true: Organization branding is displayed on Safe Links warning and notification pages. Before you configure this value, you need to follow the instructions in [Customize the Microsoft 365 theme for your organization](https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme) to upload your company logo.
- $false: Organization branding is not displayed on Safe Links warning and notification pages. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeLinksForEmail
The EnableSafeLinksForEmail parameter specifies whether to enable Safe Links protection for email messages. Valid values are:

- $true: Safe Links is enabled for email. This is the default value. When a user clicks a link in an email, the link will be checked by Safe Links. If the link is found to be malicious, a warning page appears in the default web browser.
- $false: Safe Links isn't enabled for email.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeLinksForOffice
The EnableSafeLinksForOffice parameter specifies whether to enable Safe Links protection for supported Office desktop, mobile, or web apps. Valid values are:

- $true: Safe Links scanning is enabled in Office apps. This is the default value. When a user opens a file in a supported Office app and clicks a link in the file, the link is checked by Safe Links. If the link is found to be malicious, a warning page appears in the default web browser.
- $false: Safe Links isn't enabled for Office apps.

Note that this protection applies to links in Office documents, not links in email messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeLinksForTeams
The EnableSafeLinksForTeams parameter specifies whether Safe Links is enabled for Microsoft Teams. Valid values are:

- $true: Safe Links is enabled for Teams. This is the default value. When a user clicks a link in a Teams conversation, group chat, or from channels, the link is checked by Safe Links. If the link is found to be malicious, a warning page appears in the default web browser.
- $false: Safe Links isn't enabled for Teams.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScanUrls
The ScanUrls parameter specifies whether to enable or disable real-time scanning of clicked links in email messages. Valid values are:

- $true: Real-time scanning of clicked links, including links that point to files, is enabled. This is the default value.
- $false: Real-time scanning of clicked links, including links that point to files, is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrackClicks
The TrackClicks parameter specifies whether to track user clicks related to Safe Links protection of links. Valid values are:

- $true: User clicks are tracked. This is the default value.
- $false: User clicks aren't tracked.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseTranslatedNotificationText
The UseTranslatedNotificationText specifies whether to use Microsoft Translator to automatically localize the custom notification text that you specified with the CustomNotificationText parameter. Valid values are:

- $true: Translate custom notification text to the user's language.
- $false: Don't translate custom notification text to the user's language. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
