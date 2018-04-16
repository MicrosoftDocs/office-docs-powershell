---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPFarmConfig
schema: 2.0.0
---

# Get-SPFarmConfig

## SYNOPSIS

Returns a global property or a collection of global properties for the local farm.



## SYNTAX

```
Get-SPFarmConfig [-AssignmentCollection <SPAssignmentCollection>] [-ServiceConnectionPoint]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPFarmConfig cmdlet retrieves global settings for the local farm that are not members of the SPFarm object.
This cmdlet creates a new PSCustomObject object from the collection of properties returned from the local farm, and then adds this object to the pipeline. 

The PSCustomObject object can be read, or modified and passed to the Set-SPFarmConfig cmdlet to change parameter values.

The properties collected in the PSCustomObject object must be farm-wide settings, and must be configurable only once for the entire farm.

The parameter name added to the PSCustomObject object must match exactly the input parameter name for the Set-SPFarmConfig cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [http://go.microsoft.com/fwlink/p/?LinkId=251831](http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------EXAMPLE---------------- 
```
PS C:\>$a = Get-SPFarmConfig
PS C:\>$a.AjaxTimeout = 200
PS C:\>$a | Set-SPFarmConfig
```

This example uses the Get-SPFarmConfig cmdlet to add the Ajax Timeout setting to the PSCustomObject object, sets the value for Ajax Timeout, and then passes PSCustomObject to the Set-SPFarmConfig cmdlet to change the Ajax Timeout setting. Ajax Timeout, a farm-wide setting, is a member of the SPWebService object and cannot be accessed with a Windows PowerShell cmdlet.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -ServiceConnectionPoint
Gets the information stored in the current farm's service connection point in Active Directory.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
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

