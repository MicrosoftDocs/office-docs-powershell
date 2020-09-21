---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-quarantinemessage
applicable: Exchange Online, Exchange Online Protection
title: Get-QuarantineMessage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-QuarantineMessage cmdlet to view quarantined messages and files in your cloud-based organization.

**Note**: Quarantined files are files protected by Office 365 Advanced Threat Protection in SharePoint Online, OneDrive for Business and Microsoft Teams.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Details
```
Get-QuarantineMessage -Identity <QuarantineMessageIdentity> [-SenderAddress <String[]>]
 [<CommonParameters>]
```

### Summary
```
Get-QuarantineMessage [-Direction <QuarantineMessageDirectionEnum>]
 [-Domain <String[]>]
 [-EndExpiresDate <DateTime>]
 [-EndReceivedDate <DateTime>]
 [-MessageId <String>]
 [-MyItems]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-QuarantineTypes <QuarantineMessageTypeEnum[]>]
 [-RecipientAddress <String[]>]
 [-Reported <Boolean>]
 [-SenderAddress <String[]>]
 [-StartExpiresDate <DateTime>]
 [-StartReceivedDate <DateTime>]
 [-Subject <String>]
 [-Type <QuarantineMessageTypeEnum>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantineMessage -StartReceivedDate 06/13/2016 -EndReceivedDate 06/15/2016
```

This example returns a summary list of messages quarantined between June 13, 2016 and June 15, 2016.

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

This example returns detailed information for the files protected by Office 365 Advanced Threat Protection in SharePoint Online, OneDrive for Business and Microsoft Teams.

## PARAMETERS

### -Identity
The Identity parameter specifies the quarantined message that you want to view. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

When you identify the quarantine message by using this parameter, the RecipientAddress, QuarantineUser, and ReleasedUser properties are available. To see these values, you need to use a formatting cmdlet. For example, `Get-QuarantineMessage -Identity <Identity> | Format-List`.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: Details
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Direction
The Direction parameter filters the results by incoming or outgoing messages. Valid are Inbound and Outbound.

```yaml
Type: QuarantineMessageDirectionEnum
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
The Domain parameter filters the results by sender or recipient domain. You can specify multiple domain values separated by commas.

```yaml
Type: String[]
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndExpiresDate
The EndExpiresDate parameter specifies the latest messages that will automatically be deleted from the quarantine. Use this parameter with the StartExpiresDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

For example, if you specify the StartExpiresDate value of today's date and the EndExpiresDate value of the date three days from today, you will only see messages that will expire from the quarantine in the next three days.

```yaml
Type: DateTime
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndReceivedDate
The EndReceivedDate parameter specifies the latest messages to return in the results. Use this parameter with the StartReceivedDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId
The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, `"<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>"`).

```yaml
Type: String
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyItems
The MyItems switch filters the results by messages where you (the user that's running the command) are the recipient. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page
The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 1000. The default value is 100.

```yaml
Type: Int32
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineTypes
The QuarantineTypes parameter filters the results by what caused the message to be quarantined. Valid values are:

- Bulk

- HighConfPhish

- Malware

- Phish

- Spam

- SPOMalware (ATP only)

- TransportRule

You can specify multiple values separated by commas.

You don't need to use this parameter with the Type parameter.

For files protected by Office 365 Advanced Threat Protection in SharePoint Online, OneDrive for Business and Microsoft Teams, the detection information can be found in CustomData field in the output.

```yaml
Type: QuarantineMessageTypeEnum[]
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress
The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reported
The Reported parameter filters the results by messages that have already been reported as false positives. Valid values are:

- $true: The command only returns quarantined messages that have already been reported as false positives.

- $false: The command only returns quarantined messages that haven't been reported as false positives.

```yaml
Type: Boolean
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddress
The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartExpiresDate
The StartExpiresDate parameter specifies the earliest messages that will automatically be deleted from the quarantine. Use this parameter with the EndExpiresDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

For example, if you specify the StartExpiresDate value of today's date and the EndExpiresDate value of the date three days from today, you will only see messages that will expire from the quarantine in the next three days.

```yaml
Type: DateTime
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartReceivedDate
The StartReceivedDate parameter specifies the earliest messages to return in the results. Use this parameter with the EndReceivedDate parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject
The Subject parameter filters the results by the subject field of the message. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter filters the results by what caused the message to be quarantined. Valid values are:

- Bulk

- HighConfPhish

- Phish

- Spam

- SPOMalware (ATP only)

- TransportRule

You don't need to use this parameter with the QuarantineTypes parameter.

For files protected by Office 365 Advanced Threat Protection in SharePoint Online, OneDrive for Business and Microsoft Teams, the detection information can be found in CustomData field in the output.

```yaml
Type: QuarantineMessageTypeEnum
Parameter Sets: Summary
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
