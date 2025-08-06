---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-managedfoldermailboxpolicy
schema: 2.0.0
title: Get-ManagedFolderMailboxPolicy
---

# Get-ManagedFolderMailboxPolicy

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-ManagedFolderMailboxPolicy cmdlet to return all attributes of one or more managed folder mailbox policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ManagedFolderMailboxPolicy [[-Identity] <MailboxPolicyIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
A managed folder mailbox policy is a logical grouping of one or more managed folders. Policies are applied to mailboxes. The Get-ManagedFolderMailboxPolicy cmdlet lists one or more managed folder mailbox policies created in the Microsoft Exchange Server 2010 organization. All policies can be listed.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ManagedFolderMailboxPolicy "PM Storage Template"
```

This example returns all the attributes of the managed folder mailbox policy PM Storage Template.

The Identity parameter is a positional parameter. Positional parameters can be used without the label (Identity). For more information about positional parameters, see [About Parameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_parameters).

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the name, distinguished name (DN), or GUID of the managed folder mailbox policy.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
