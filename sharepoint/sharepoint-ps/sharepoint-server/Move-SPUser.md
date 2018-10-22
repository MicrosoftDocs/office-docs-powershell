---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Move-SPUser
schema: 2.0.0
---

# Move-SPUser

## SYNOPSIS

Migrates a user account in SharePoint Products.



## SYNTAX

```
Move-SPUser [-Identity] <SPUserPipeBind> -NewAlias <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-IgnoreSID] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Move-SPUser cmdlet migrates user access from one domain user account to another.
If an entry for the new login name already exists, the entry is marked for deletion to make way for the migration.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>$user = Get-SPUser -Identity "DOMAIN\JaneDoe" -Web http://webUrl
PS C:\>Move-SPUser -Identity $user -NewAlias "Domain\JaneSmith" -IgnoreSid
```

This example migrates DOMAIN\JaneDoe to the new account of DOMAIN\JaneSmith.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>$user = Get-SPUser -Identity "DomainA\JaneDoe" -Web http://webUrl
PS C:\>Move-SPUser -Identity $user -NewAlias "DomainB\JaneDoe"
```

This example migrates DOMAIN\JaneDoe from DomainA to the new account of DOMAINB\JaneDoe in DomainB with SID History enabled.

### ------------------EXAMPLE 3------------------ 
```
C:\PS>$user = Get-SPUser -Identity "i:0#.w|DOMAIN\JaneDoe" -Web http://webUrl
PS C:\>Move-SPUser -Identity $user -NewAlias "i:0#.W|Domain\JaneSmith" -IgnoreSid
```

This example migrates DOMAIN\JaneDoe to the new account of DOMAIN\JaneSmith when using Windows Claims. `-IgnoreSid` must always be used with `Move-SPUser` when using a Claims Identity, such as Windows Claims.

## PARAMETERS

### -Identity
Specifies the `SPUser` object retrieved via `Get-SPUser`.

The type must be a valid `SPUser` object.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NewAlias
Specifies the new login name of the user account.

The type must be a valid login name, in the form DOMAIN\username.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreSID
Indicates (if present) that Active Directory will not be queried for the SID history attribute to ensure that the new login name is correspondent to the old login name.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

