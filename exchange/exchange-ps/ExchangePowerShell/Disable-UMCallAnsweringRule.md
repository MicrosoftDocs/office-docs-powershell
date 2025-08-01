---
applicable: Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-umcallansweringrule
schema: 2.0.0
title: Disable-UMCallAnsweringRule
---

# Disable-UMCallAnsweringRule

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Disable-UMCallAnsweringRule cmdlet to disable a call answering rule that has been created within a UM-enabled mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Disable-UMCallAnsweringRule [-Identity] <UMCallAnsweringRuleIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Disable-UMCallAnsweringRule cmdlet disables the call answering rule by modifying its status variable. Disabling a call answering rule prevents it from being retrieved and processed when an incoming call is received. With this cmdlet, you can disable an existing call answering rule that's enabled.

When the call answering rule is created, you should disable the call answering rule when you're setting up conditions and actions. This prevents the call answering rule from being processed when an incoming call is received until you've correctly configured the call answering rule. After this task is completed, the cmdlet sets the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable -UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith
```

This example disables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith.

### Example 2
```powershell
Disable -UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -WhatIf
```

This example uses the WhatIf switch to test whether the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith is ready to be disabled and if there are any errors within the command.

### Example 3
```powershell
Disable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -Confirm
```

This example disables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith and prompts the user logged on to confirm that they're disabling the call answering rule.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the UM call answering rule in a UM-enabled mailbox that's to be disabled.

```yaml
Type: UMCallAnsweringRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

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

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2013, Exchange Server 2016

The Mailbox parameter specifies the UM-enabled mailbox that contains the UM call answering rule. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

If you don't use this parameter, the mailbox of the user who is running the command is used.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
