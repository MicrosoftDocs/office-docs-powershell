---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPPluggableSecurityTrimmer

## SYNOPSIS
Gets pluggable security trimmers added to a profile service application proxy.

## SYNTAX

```
Get-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId <Guid>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPPluggableSecurityTrimmer cmdlet to list the pluggable security trimmers that have been added to a User Profile service application proxy.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE--------------------- (SharePoint Server 2013)
```
C:\PS>$pr = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")}

C:\PS>Get-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $pr.Id
```

This example gets a list of the pluggable security trimmers that are associated with the User Profile service application proxy.

### -------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>$pr = Get-SPServiceApplicationProxy | ? {$_.TypeName.Contains("Profile")}

          C:\PS>Get-SPPluggableSecurityTrimmer -UserProfileApplicationProxyId $pr.Id
```

This example gets a list of the pluggable security trimmers that are associated with the User Profile service application proxy.

## PARAMETERS

### -UserProfileApplicationProxyId
Specifies the ID of the User Profile service application proxy to which the pluggable security trimmers have been added.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

