---
applicable: Exchange Server 2013, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/test-message
schema: 2.0.0
title: Test-Message
---

# Test-Message

## SYNOPSIS
This cmdlet is functional only in the cloud-based service.

Use the Test-Message cmdlet to simulate and report on the effects of mail flow rules (transport rules) and unified DLP rules on test email messages. Because this cmdlet introduces email into the DLP evaluation pipeline, actions such as Block, Moderate, etc. can take place on the test message. Related notifications will also be sent to any configured recipients.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### TransportRules
```
Test-Message -Recipients <ProxyAddressCollection> -SendReportTo <RecipientIdParameter> [-TransportRules]
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-UnifiedDlpRules]
 [-WhatIf]
 [<CommonParameters>]
```

### UnifiedDLPRules
```
Test-Message -Recipients <ProxyAddressCollection> -SendReportTo <RecipientIdParameter> [-UnifiedDlpRules]
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$data = [System.IO.File]::ReadAllBytes('C:\Data\test.eml')

Test-Message -MessageFileData $data -Sender megan@contoso.com -Recipients adele@contoso.com -SendReportTo admin@contoso.com -TransportRules -UnifiedDlpRules
```

This example uses the test.eml message file at C:\Data to test mail flow rules and unified DLP rules for the sender megan@contoso.com to the recipient adele@contoso.com. The results report is sent to admin@contoso.com.

## PARAMETERS

### -Recipients

> Applicable: Exchange Online, Exchange Online Protection

The Recipients parameter specifies the recipient email address to use for the test message.

You can specify multiple email addresses separated by commas.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendReportTo

> Applicable: Exchange Online, Exchange Online Protection

The SendReportTo parameter specifies the target email address for the command results.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRules

> Applicable: Exchange Server 2013, Exchange Online, Exchange Online Protection

The TransportRules switch specifies that you want to test mail flow rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: TransportRules
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnifiedDlpRules

> Applicable: Exchange Online, Exchange Online Protection

The UnifiedDlpRules switch specifies that you want to unified DLP rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: UnifiedDLPRules, TransportRules
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Online, Exchange Online Protection

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFileData

> Applicable: Exchange Online, Exchange Online Protection

The MessageFileData parameter specifies the .eml message file to test.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender

> Applicable: Exchange Online, Exchange Online Protection

The Sender parameter specifies the sender email address to use for the test message.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
