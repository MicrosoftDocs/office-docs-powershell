---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/test-message
applicable: Exchange Server 2013, Exchange Online
title: Test-Message
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Test-Message

## SYNOPSIS
This cmdlet is available or functional only in the cloud-based service.

Use the Test-Message cmdlet to simulate and report on the effects of mail flow rules (transport rules) and unified DLP rules on test email messages. 

**Note**: Because this cmdlet introduces email into the DLP evaluation pipeline, actions such as Block, Moderate, etc. can take place on the test message. Related notifications will also be sent to any configured recipients.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Test-Message
 [-Confirm]
 [-TransportRules]
 [-WhatIf]
 [<CommonParameters>]
```

### SecOpsOverrideRules
```
Test-Message -Recipients <ProxyAddressCollection>
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### PhishSimOverrideRules
```
Test-Message -Recipients <ProxyAddressCollection>
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>] 
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### UnifiedDLPRules
```
Test-Message -Recipients <ProxyAddressCollection> [-UnifiedDlpRules]
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### TransportRulesWithContent
```
Test-Message -Recipients <ProxyAddressCollection> [-UnifiedDlpRules]
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### TransportRules
```
Test-Message -Recipients <ProxyAddressCollection> [-TransportRules] [-UnifiedDlpRules]
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### JunkMail
```
Test-Message -Recipients <ProxyAddressCollection>
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### InboxRules
```
Test-Message -Recipients <ProxyAddressCollection>
 [-Confirm]
 [-Force]
 [-MessageFileData <Byte[]>]
 [-Sender <SmtpAddress>]
 [-SendReportTo <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Arbitration
```
Test-Message -Recipients <ProxyAddressCollection> -Sender <SmtpAddress> -SendReportTo <RecipientIdParameter>
 [-Confirm]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$data = Get-Content -Path "C:\Data\test.eml" -Encoding Byte -ReadCount 0
Test-Message -MessageFileData $data -Sender megan@contoso.com -Recipients adele@contoso.com -SendReportTo admin@contoso.com -TransportRules -UnifiedDlpRules
```

This example uses the test.eml message file at C:\Data to test mail flow rules and unified DLP rules for the sender megan@contoso.com to the recipient megan@contoso.com. The results report is sent to admin@contoso.com.

## PARAMETERS

### -Recipients
The Recipients parameter specifies the recipient email address to use for the test message.

You can specify multiple email addresses separated by commas.

```yaml
Type: ProxyAddressCollection
Parameter Sets: SecOpsOverrideRules, PhishSimOverrideRules, UnifiedDLPRules, TransportRulesWithContent, TransportRules, JunkMail, InboxRules, Arbitration
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender
The Sender parameter specifies the sender email address to use for the test message.
```yaml
Type: SmtpAddress
Parameter Sets: Arbitration
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SmtpAddress
Parameter Sets: SecOpsOverrideRules, PhishSimOverrideRules, UnifiedDLPRules, TransportRulesWithContent, TransportRules, JunkMail, InboxRules
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendReportTo
The SendReportTo parameter specifies the target email address for the command results.

```yaml
Type: RecipientIdParameter
Parameter Sets: Arbitration
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: RecipientIdParameter
Parameter Sets: SecOpsOverrideRules, PhishSimOverrideRules, UnifiedDLPRules, TransportRulesWithContent, TransportRules, JunkMail, InboxRules
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRules
The TransportRules switch specifies that you want to test mail flow rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Default, TransportRules
Aliases:
Applicable: Exchange Server 2013, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnifiedDlpRules
The UnifiedDlpRules switch specifies that you want to unified DLP rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: UnifiedDLPRules
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SwitchParameter
Parameter Sets: TransportRulesWithContent, TransportRules
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
Applicable: Exchange Server 2013, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: SecOpsOverrideRules, PhishSimOverrideRules, UnifiedDLPRules, TransportRulesWithContent, TransportRules, JunkMail, InboxRules, Arbitration
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFileData
The MessageFileData parameter specifies the .eml message file to test.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.

```yaml
Type: Byte[]
Parameter Sets: SecOpsOverrideRules, PhishSimOverrideRules, UnifiedDLPRules, TransportRulesWithContent, TransportRules, JunkMail, InboxRules
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
Applicable: Exchange Server 2013, Exchange Online

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
