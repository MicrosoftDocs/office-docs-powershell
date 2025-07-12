---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-umcallansweringrule
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-UMCallAnsweringRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-UMCallAnsweringRule

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UMCallAnsweringRule cmdlet to view the properties of a Unified Messaging (UM) call answering rule that has been created within a UM-enabled mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UMCallAnsweringRule [[-Identity] <UMCallAnsweringRuleIdParameter>]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-UMCallAnsweringRule cmdlet enables you to view the properties of a call answering rule that has been created in a UM-enabled user's mailbox. It allows you to retrieve the properties for a single call answering rule or a list of call answering rules in a UM-enabled user's mailbox.

After this task is completed, the cmdlet returns the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith | Format-List
```

This example returns a formatted list of call answering rules in a user's UM-enabled mailbox.

### Example 2
```powershell
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule
```

This example displays the properties of the call answering rule MyUMCallAnsweringRule.

## PARAMETERS

### -Identity
The Identity parameter specifies the identifier for a call answering rule being viewed.

```yaml
Type: UMCallAnsweringRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
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
Applicable: Exchange Server 2013, Exchange Server 2016

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
