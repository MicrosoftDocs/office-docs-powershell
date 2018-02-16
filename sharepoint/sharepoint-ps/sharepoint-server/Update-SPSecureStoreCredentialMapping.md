---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Update-SPSecureStoreCredentialMapping
schema: 2.0.0
---

# Update-SPSecureStoreCredentialMapping

## SYNOPSIS
Sets a new credential mapping for a Secure Store Service application.

## SYNTAX

```
Update-SPSecureStoreCredentialMapping -Identity <SPSecureStoreApplication> -Principal <SPClaim>
 -Values <SecureString[]> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Update-SPSecureStoreCredentialMapping` cmdlet sets a new credential mapping for a Secure Store Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$ssApp = Get-SPSecureStoreApplication -ServiceContext http://contoso -Name "ContosoTargetApplication"

$firstCredential = ConvertTo-SecureString "LOBDATABASE\jdoe" -AsPlainText -Force

$secondCredential = ConvertTo-SecureString "abcDEF123$%^" -AsPlainText -Force

$credentialValues = $firstCredential,$secondCredential

$userClaim = New-SPClaimsPrincipal -Identity "CONTOSO\janedoe" -IdentityType WindowsSamAccountName

Update-SPSecureStoreCredentialMapping -Identity $ssApp -Values $credentialValues -Principal $userClaim
```

This example updates a credential mapping for the given site and the target application ContosoTargetApplication, for the user with the identity janedoe on domain CONTOSO.
This user is mapped to a pair of credential values on the External System with a username of identity jdoe on domain LOBDATABASE and password abcDEF123$%^.

## PARAMETERS

### -Identity
Specifies the Secure Store Service application (that contains the principal) from which to delete the credential mapping.

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

### -Principal
Specifies the SPClaims object that contains the principal.

```yaml
Type: SPClaim
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

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
