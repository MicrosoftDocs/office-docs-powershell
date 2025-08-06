---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-managedfolder
schema: 2.0.0
title: Get-ManagedFolder
---

# Get-ManagedFolder

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-ManagedFolder cmdlet to retrieve the attributes of one or more managed folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ManagedFolder [[-Identity] <ELCFolderIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Mailbox
```
Get-ManagedFolder [-Mailbox <MailboxIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-ManagedFolder cmdlet retrieves the specified managed folder attributes:

- If only an Identity parameter value is present, the command retrieves the specified folder and all associated attributes.
- If a Mailbox parameter value is present, the command retrieves all managed folders that apply to that user by means of a managed folder mailbox policy applied by an administrator. Managed folders that users add by means of an organization's managed folder opt-in Web site aren't displayed by this command.
- If no parameter values are specified, the command retrieves all the folder objects and their associated attributes.

The Get-ManagedFolder cmdlet accepts a ManagedFolder object or an identity string as pipelined input.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ManagedFolder MyManagedFolder | Format-List
```

This example retrieves information about the managed folder MyManagedFolder. The output of the Get-ManagedFolder cmdlet is piped to the Format-List cmdlet so that all the available information is displayed in the result.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the name, distinguished name (DN), or GUID of the managed folder.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: Identity
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

### -Mailbox

> Applicable: Exchange Server 2010

The Mailbox parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

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

This cmdlet retrieves all the folders that apply to the specified mailbox.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
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
