---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPPluggableSecurityTrimmer
schema: 2.0.0
---

# Remove-SPPluggableSecurityTrimmer

## SYNOPSIS
Removes a pluggable security trimmer from a profile service application proxy.


## SYNTAX

```
Remove-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId <Guid> -PlugInId <Int32>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Remove-SPPluggableSecurityTrimmer` cmdlet to remove a specified pluggable security trimmer from a User Profile service application proxy.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -----------------EXAMPLE 1----------------------
```
C:\PS>$pr = Get-SPServiceApplicationProxy | ? $_.TypeName.Contains("Profile")}

          C:\PS>Remove-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $pr.Id -PlugInId 0
```

This example removes a pluggable security trimmer.


### -----------------EXAMPLE 2----------------------
```
C:\PS>$proxy = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")} $proxy.Id

          C:\PS>Remove-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $proxy.Id -PlugInId 0
```

This example turns off security trimming in a User Profile Service Application.


## PARAMETERS

### -UserProfileApplicationProxyId
Specifies the ID of the User Profile service application proxy from which the pluggable security trimmer is removed.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlugInId
The index of the pluggable security trimmer must have an integer value greater than or equal to zero.

```yaml
Type: Int32
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
