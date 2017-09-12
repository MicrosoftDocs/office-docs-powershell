---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-SPPluggableSecurityTrimmer

## SYNOPSIS
Adds a pluggable security trimmer to a Profile service application proxy.

## SYNTAX

```
Add-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId <Guid> -PlugInId <Int32>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-QualifiedTypeName <String>] [-WhatIf]
 [-CustomProperties <NameValueCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the Add-SPPluggableSecurityTrimmer cmdlet to add a specified pluggable security trimmer to a User Profile service application proxy.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE 1-------------------- (SharePoint Server 2013)
```
C:\PS>$pr = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")}

C:\PS>Add-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $pr.Id -PlugInId 0
```

This example adds a pluggable security trimmer that is related to the User Profile service application proxy.

### ----------------EXAMPLE 1-------------------- (SharePoint Server 2016)
```
C:\PS>$pr = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")}

          C:\PS>Add-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $pr.Id -PlugInId 0
```

This example adds a pluggable security trimmer that is related to the User Profile service application proxy.

### -----------------EXAMPLE 2---------------------- (SharePoint Server 2013)
```
C:\PS>$proxy = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")} $proxy.Id

C:\PS>Add-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $proxy.Id -PlugInId 0
```

This example turns on security trimming in a User Profile Service Application.

### -----------------EXAMPLE 2---------------------- (SharePoint Server 2016)
```
C:\PS>$proxy = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")} $proxy.Id

          C:\PS>Add-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $proxy.Id -PlugInId 0
```

This example turns on security trimming in a User Profile Service Application.

## PARAMETERS

### -UserProfileApplicationProxyId
Specifies the ID of the User Profile service application proxy to which you are adding the pluggable security trimmer.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QualifiedTypeName
Specifies the qualified type name of the class that implements the pluggable security trimmer.

The type must be a valid qualified type name, in the form Microsoft.Office.Server.SocialData.SocialSecurityTrimmer,Microsoft.Office.Server.UserProfiles,Version=14.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomProperties
{{Fill CustomProperties Description}}

```yaml
Type: NameValueCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

