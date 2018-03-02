---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Get-PublicFolderAdministrativePermission

## SYNOPSIS
Use the Get-PublicFolderAdministrativePermission cmdlet to get the administrative permissions for a public folder or a public folder hierarchy.

## SYNTAX

### Set2
```
Get-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter> [-DomainController <Fqdn>]
 [-Owner] [-Server <ServerIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter> [-DomainController <Fqdn>]
 [-Server <ServerIdParameter>] [-User <SecurityPrincipalIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Public folder administrative permissions" entry in the Mailbox Permissions topic.

## EXAMPLES

### Example 1
```
Get-PublicFolderAdministrativePermission -Identity "\My Public Folder"
```

This example retrieves the administrative permissions for all users of the public folder My Public Folder.

### Example 2
```
Get-PublicFolderAdministrativePermission -Identity "\My Public Folder" -User Chris -Server "My Server" | Format-List
```

This example retrieves the administrative permissions for the public folder My Public Folder, for the user Chris, on the server My Server. In this example, the output of the Get-PublicFolderAdministrativePermission command is piped to the Format-List command so that all the available information is displayed in the result.

### Example 3
```
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
The Owner parameter specifies that the command should return only the owner of the public folder.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server on which to perform the selected operations.

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
The User parameter specifies the user principal name (UPN), domain\\user, or alias of the user for whom administrative permissions are sought.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e0d52900-ee08-4f7e-bb13-a0fabee1d26f.aspx)

