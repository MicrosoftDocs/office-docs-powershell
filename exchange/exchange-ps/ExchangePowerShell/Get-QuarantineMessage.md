---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-quarantinemessage
schema: 2.0.0
title: Get-QuarantineMessage
---

# Get-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-QuarantineMessage cmdlet to view quarantined messages and files in your cloud-based organization. Files are quarantined by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Details
```
Get-QuarantineMessage -Identity <QuarantineMessageIdentity>
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-RecipientAddress <String[]>]
 [-SenderAddress <String[]>]
 [-TeamsConversationTypes <Microsoft.Exchange.Management.FfoQuarantine.TeamsConversationType[]>]
 [<CommonParameters>]
```

### Summary
```
Get-QuarantineMessage
 [-Direction <Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageDirectionEnum>]
 [-Domain <String[]>]
 [-EndExpiresDate <System.DateTime>]
 [-EndReceivedDate <System.DateTime>]
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-IncludeMessagesFromBlockedSenderAddress]
 [-MessageId <String>]
 [-MyItems]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-PolicyName <String>]
 [-PolicyTypes <QuarantinePolicyTypeEnum[]>]
 [-QuarantineTypes <QuarantineMessageTypeEnum[]>]
 [-RecipientAddress <String[]>]
 [-RecipientTag <String[]>]
 [-ReleaseStatus <ReleaseStatus[]>]
 [-Reported <Boolean>]
 [-SenderAddress <String[]>]
 [-StartExpiresDate <System.DateTime>]
 [-StartReceivedDate <System.DateTime>]
 [-Subject <String>]
 [-TeamsConversationTypes <Microsoft.Exchange.Management.FfoQuarantine.TeamsConversationType[]>]
 [-Type <Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageTypeEnum>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantineMessage -StartReceivedDate 06/13/2017 -EndReceivedDate 06/15/2017
```

This example returns a summary list of messages quarantined between June 13, 2017 and June 15, 2017.

### Example 2
```powershell
Get-QuarantineMessage -PageSize 50 -Page 3
```

This example presents 50 quarantined messages per page, and returns the third page of results.

### Example 3
```powershell
Get-QuarantineMessage -MessageID "<5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com>"
```

This example returns the quarantined message with the Message-ID value `<5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com>`.

### Example 4
```powershell
Get-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7 | Format-List
```

This example returns detailed information for the quarantined message with the specified Identity value.

### Example 5
```powershell
Get-QuarantineMessage -QuarantineTypes SPOMalware | Format-List
```

This example returns detailed information for the files protected by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Identity parameter specifies the quarantined message that you want to view. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

When you identify the quarantine message by using this parameter, the RecipientAddress, QuarantineUser, and ReleasedUser properties are available. To see these values, you need to use a formatting cmdlet. For example, `Get-QuarantineMessage -Identity <Identity> | Format-List`.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: Details
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Direction

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Direction parameter filters the results by incoming or outgoing messages. Valid values are:

- Inbound
- Outbound

You can specify multiple values separated by commas.

```yaml
Type: Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageDirectionEnum
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndExpiresDate

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The EndExpiresDate parameter specifies the latest messages that will automatically be deleted from the quarantine. Use this parameter with the StartExpiresDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

For example, if you specify the StartExpiresDate value of today's date and the EndExpiresDate value of the date three days from today, you will only see messages that will expire from the quarantine in the next three days.

```yaml
Type: System.DateTime
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndReceivedDate

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The EndReceivedDate parameter specifies the latest messages to return in the results. Use this parameter with the StartReceivedDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntityType

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The EntityType parameter filters the results by EntityType. Valid values are:

- Email
- SharePointOnline
- Teams (currently in Preview)
- DataLossPrevention

```yaml
Type: Microsoft.Exchange.Management.FfoQuarantine.EntityType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeMessagesFromBlockedSenderAddress

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The IncludeMessagesFromBlockedSenderAddress switch specifies whether to include quarantined messages from blocked senders in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, `"<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>"`).

```yaml
Type: String
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyItems

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The MyItems switch filters the results by messages where you (the user that's running the command) are the recipient. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 1000. The default value is 100.

```yaml
Type: Int32
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The PolicyName parameter filters the results by the threat policy that quarantined the message (for example, an anti-malware policy or an anti-spam policy). You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: String
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTypes

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The PolicyTypes parameter filters the results by the type of threat policy that quarantined the message. Valid values are:

- AntiMalwarePolicy
- AntiPhishPolicy
- DataLossPreventionRule
- ExchangeTransportRule (mail flow rule)
- HostedContentFilterPolicy (anti-spam policy)
- SafeAttachmentPolicy (Microsoft Defender for Office 365 only)

You can specify multiple values separated by commas.

```yaml
Type: QuarantinePolicyTypeEnum[]
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineTypes

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The QuarantineTypes parameter filters the results by what caused the message to be quarantined. Valid values are:

- Bulk
- DataLossPrevention
- FileTypeBlock (common attachments filter in anti-malware policies in EOP)
- HighConfPhish
- Malware (anti-malware policies in EOP or Safe Attachments policies in Defender for Office 365)
- Phish
- Spam
- SPOMalware (Microsoft Defender for Office 365 only)
- TransportRule

You can specify multiple values separated by commas.

You don't need to use this parameter with the Type parameter.

For files quarantined by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams, the detection information can be found in CustomData field in the output.

```yaml
Type: QuarantineMessageTypeEnum[]
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: All
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTag

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The RecipientTag parameter filters the results by the recipient's user tag value (for example, `Priority Account`). For more information about user tags, see [User tags in Defender for Office 365](https://learn.microsoft.com/defender-office-365/user-tags-about).

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReleaseStatus

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The ReleaseStatus parameter filters the results by the release status of the message. Valid values are:

- Approved
- Denied
- Error
- NotReleased
- PreparingToRelease
- Released
- Requested

You can specify multiple values separated by commas.

**Note**: Messages that were quarantined and released by Microsoft due to a service issue have the SystemReleased property value TRUE. To filter the results by system released messages, run the following command: `Get-QuarantineMessage | where {$_.systemreleased -like "True"}`.

```yaml
Type: ReleaseStatus[]
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reported

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Reported parameter filters the results by messages that have already been reported as false positives. Valid values are:

- $true: The command only returns quarantined messages that have already been reported as false positives.
- $false: The command only returns quarantined messages that haven't been reported as false positives.

```yaml
Type: Boolean
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddress

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartExpiresDate

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The StartExpiresDate parameter specifies the earliest messages that will automatically be deleted from the quarantine. Use this parameter with the EndExpiresDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

For example, if you specify the StartExpiresDate value of today's date and the EndExpiresDate value of the date three days from today, you will only see messages that will expire from the quarantine in the next three days.

```yaml
Type: System.DateTime
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartReceivedDate

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The StartReceivedDate parameter specifies the earliest messages to return in the results. Use this parameter with the EndReceivedDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

By default, if you don't use the StartReceivedDate and EndReceivedDate parameters, the command will return data for the last 16 days. The maximum value for this parameter is 30 days. If you use a value that's older than 30 days, the value is ignored and only data for the last 30 days is returned.

```yaml
Type: System.DateTime
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Subject parameter filters the results by the subject field of the message. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsConversationTypes

> Applicable: Security & Compliance

This parameter is available only in Security & Compliance PowerShell.

The TeamsConversationTypes parameters filters the results by Microsoft Teams conversation types. Valid values are:

- Channel
- Chat

You can specify multiple values separated by commas.

```yaml
Type: Microsoft.Exchange.Management.FfoQuarantine.TeamsConversationType[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Type parameter filters the results by what caused the message to be quarantined. Valid values are:

- Bulk
- DataLossPrevention
- HighConfPhish
- Malware
- Phish
- Spam
- SPOMalware (Microsoft Defender for Office 365 only)
- TransportRule

You don't need to use this parameter with the QuarantineTypes parameter.

For files protected by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams, the detection information can be found in CustomData field in the output.

```yaml
Type: Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageTypeEnum
Parameter Sets: Summary
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
