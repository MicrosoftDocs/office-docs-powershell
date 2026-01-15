---
applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/export-quarantinemessage
schema: 2.0.0
title: Export-QuarantineMessage
---

# Export-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Export-QuarantineMessage cmdlet to export quarantined messages and files from your cloud-based organization. Messages are exported to .eml message files so you can open them in Outlook.

For files that were quarantined by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams, the files are exported in Base64 format.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identities
```
Export-QuarantineMessage -Identities <QuarantineMessageIdentity[]> [-Identity <QuarantineMessageIdentity>]
 [-CompressOutput]
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-ForceConversionToMime]
 [-Password <SecureString>]
 [-PasswordV2 <String>]
 [-ReasonForExport <String>]
 [-RecipientAddress <String>]
 [<CommonParameters>]
```

### IdentityOnly
```
Export-QuarantineMessage -Identity <QuarantineMessageIdentity>
 [-CompressOutput]
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-ForceConversionToMime]
 [-Password <SecureString>]
 [-PasswordV2 <String>]
 [-ReasonForExport <String>]
 [-RecipientAddress <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$e = Export-QuarantineMessage -Identity b28e0706-e50e-4c33-17e8-08daf2898d15\e939baaf-9dac-6126-2137-b82abf373159

$txt = [System.Text.Encoding]::Ascii.GetString([System.Convert]::FromBase64String($e.eml))

[IO.File]::WriteAllText("C:\My Documents\Quarantined Message.eml", $txt)
```

This example exports the specified message that was quarantined as spam:

- The first command exports the quarantined message to the variable `$e`. The message is stored in the Eml property (the `$e.eml` value) as Base64 (based on the `$e.BodyEncoding` value).
- The second command converts the Eml property from Base64 to ASCII text and stores the result in the variable `$txt`.
- The third command writes the quarantined message to the specified .eml file.

**Note**: Don't enclose the Identity value in quotation marks (you might get an error).

### Example 2
```powershell
$f = Export-QuarantineMessage -Identity 9c6bb3e8-db9e-4823-9759-08d594179bd3\7fec89fe-41b0-ae67-4887-5bede017d111

$bytes = [Convert]::FromBase64String($f.eml)

[IO.File]::WriteAllBytes("C:\My Documents\Quarantined Message with Attachments.eml", $bytes)
```

This example exports the specified message with attachments that was quarantined as malware:

- The first command exports the quarantined message and attachments to the variable `$f`. The message and attachments are stored in the Eml property (the `$f.eml` value) as Base64 (based on the `$f.BodyEncoding` value).
- The second command converts the Eml property from Base64 to bytes and stores the result in the variable `$bytes`.
- The third command writes the quarantined message and attachments to the specified .eml file.

## PARAMETERS

### -Identities

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The Identities parameter identifies quarantined messages for bulk operations. You identify the messages by using the syntax: `value1,value2...valueN`. Each value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

When you use this parameter, the Identity parameter is required, but the value is ignored. For example, use the value 000 for the Identity parameter.

```yaml
Type: QuarantineMessageIdentity[]
Parameter Sets: Identities
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the quarantined message that you want to export. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: Identities, IdentityOnly
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -CompressOutput

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The CompressOutput switch exports the message as a compressed .zip file. You don't need to specify a value with this switch.

For exported messages, including messages with attachments, the .zip file contains a folder that's named after the first GUID value in the Identity. The folder contains the .eml message that's named after the second GUID value in the Identity.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntityType

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

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

### -ForceConversionToMime

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The ForceConversionToMime switch converts exported plain text messages to MIME formatting. You don't need to specify a value with this switch.

This switch has no effect if the message is already encoded as Base64.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The Password parameter specifies the password that's required to open the exported message.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

To enter the password in plain text, use the PasswordV2 parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordV2

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The PasswordV2 parameter specifies the plain text value of the password that's required to open the exported message. Enclose the value in quotation marks (for example, `'<password>'`).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReasonForExport

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The ReasonForExport parameter specifies why the message was exported. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
