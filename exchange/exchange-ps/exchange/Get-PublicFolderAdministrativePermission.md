---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfolderadministrativepermission
applicable: Exchange Server 2010
title: Get-PublicFolderAdministrativePermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-PublicFolderAdministrativePermission

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-PublicFolderAdministrativePermission cmdlet to get the administrative permissions for a public folder or a public folder hierarchy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter> [-User <SecurityPrincipalIdParameter>]
 [-DomainController <Fqdn>]
 [-Server <ServerIdParameter>]
 [<CommonParameters>]
```

### Owner
```
Get-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter> [-Owner]
 [-DomainController <Fqdn>]
 [-Server <ServerIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderAdministrativePermission -Identity "\My Public Folder"
```

This example retrieves the administrative permissions for all users of the public folder My Public Folder.

### Example 2
```powershell
Get-PublicFolderAdministrativePermission -Identity "\My Public Folder" -User Chris -Server "My Server" | Format-List
```

This example retrieves the administrative permissions for the public folder My Public Folder, for the user Chris, on the server My Server. In this example, the output of the Get-PublicFolderAdministrativePermission command is piped to the Format-List command so that all the available information is displayed in the result.

### Example 3
```powershell
Get-PublicFolderAdministrativePermission -Identity "\My Public Folder" -Owner
```

This example retrieves the owner of the public folder My Public Folder.

## PARAMETERS

### -Identity
The Identity parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format TopLevelPublicFolder\\PublicFolder.

You can omit the parameter label so that only the public folder name or GUID is supplied.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
The Owner switch returns the owner of the public folder object. You don't need to specify a value with this switch.

You can't use this switch with the User parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Owner
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter filters the results by the specified Exchange server. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User
The User parameter filters the results by who has admin permissions on the specified public folder. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

You can use any value that uniquely identifies the user or group. For example:

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

You can't use this parameter with the Owner switch.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

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
