---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Update-SPSecureStoreGroupCredentialMapping
schema: 2.0.0
---

# Update-SPSecureStoreGroupCredentialMapping

## SYNOPSIS
Sets a new group credential mapping for a Secure Store Service application.

## SYNTAX

```
Update-SPSecureStoreGroupCredentialMapping -Identity <SPSecureStoreApplication> -Values <SecureString[]>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Update-SPSecureStoreGroupCredentialMapping` cmdlet sets a new group credential mapping for a Secure Store Service application.
Group credentials are a set of credentials that are associated with multiple identities.
Target applications will get credentials for a Secure Store application by using the current user.
If the current user meets the authorization rule defined in the Secure Store application for the group credentials, then the data is provided.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$ssApp = Get-SPSecureStoreApplication -ServiceContext http://contoso -Name "ContosoGroupTargetApplication"

$firstCredential = ConvertTo-SecureString "LOBDATABASE\fulltimeemployees" -AsPlainText -Force

$secondCredential = ConvertTo-SecureString "abcDEF123$%^" -AsPlainText -Force

$credentialValues = $firstCredential,$secondCredential

Update-SPSecureStoreGroupCredentialMapping -Identity $ssApp -Values $credentialValues
```

This example adds a credential mapping for the target application ContosoGroupTargetApplication, for all users in this group target application.
These users are mapped to a pair of credential values on the External System with a username of identity fulltimeemployees on domain LOBDATABASE and with password abcDEF123$%^.

## PARAMETERS

### -Identity
Specifies the Secure Store application (that contains the principal) from which to delete the credential mapping.

```yaml
Type: SPSecureStoreApplication
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Values
Specifies the field values for the credential mapping.

```yaml
Type: SecureString[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
