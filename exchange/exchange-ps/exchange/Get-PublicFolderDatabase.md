---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfolderdatabase
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-PublicFolderDatabase
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-PublicFolderDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-PublicFolderDatabase cmdlet to view public folder database settings for Microsoft Exchange Server 2010 or earlier public folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Server
```
Get-PublicFolderDatabase -Server <ServerIdParameter>
 [-DomainController <Fqdn>]
 [-IncludePreExchange2010]
 [-Status]
 [-IncludeCorrupted]
 [<CommonParameters>]
```

### Identity
```
Get-PublicFolderDatabase [[-Identity] <DatabaseIdParameter>]
 [-DomainController <Fqdn>]
 [-IncludePreExchange2010]
 [-Status]
 [-IncludeCorrupted]
 [<CommonParameters>]
```

## DESCRIPTION
You can specify either the Server or Identity parameter, but not both. Only the Server and Identity parameters can be piped.

When you run the Get-PublicFolderDatabase cmdlet with no parameters, it returns attributes of all of the public folder databases in the Exchange organization. To return specific database properties (including backup and mount status information) where the Get-PublicFolderDatabase cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the Status parameter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderDatabase | Format-List
```

This example returns all the attributes of all the public folder databases in the organization by piping the results of the Get-PublicFolderDatabase command to the Format-List command.

### Example 2
```powershell
Get-PublicFolderDatabase -Identity "Server01\PFDatabase"
```

This example returns information about the public folder database PFDatabase that resides on Server01.

### Example 3
```powershell
Get-PublicFolderDatabase -Server Server01
```

This example returns information about all public folders on Server01.

## PARAMETERS

### -Identity
The Identity parameter specifies the public folder database that you want to view. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't the Identity and Server parameters in the same command.

If you have multiple databases with the same name, the cmdlet retrieves all databases with the same name in the specified scope.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter filters the results by the specified Exchange server. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can't use the Server and Identity parameters in the same command.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: True
Position: Named
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePreExchange2010
This parameter is available only in Exchange Server 2010.

The IncludePreExchange2010 switch specifies whether to include information about Exchange 2003 or Exchange 2007 public folders in the results. You don't need to specify a value with this switch.

This switch isn't useful in commands where you use the Server or Identity parameters.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status switch specifies whether to include additional backup and mount status information for servers running Exchange 2010. You don't need to specify a value with this switch.

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

### -IncludeCorrupted
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
