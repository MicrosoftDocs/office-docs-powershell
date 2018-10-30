---
external help file: 
applicable: SharePoint Server 2016, SharePoint Server 2019
title: Set-SPServer
schema: 2.0.0
---

# Set-SPServer

## SYNOPSIS
Changes the role of the server.


## SYNTAX

```
Set-SPServer [-Identity] <SPServerPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Role <SPServerRole>] [-Status <SPObjectStatus>] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPServer cmdlet changes the role of the server in the farm by using the Role parameter. A new cmdlet in SharePoint Server 2016, SharePoint Server 2019 that is used in MinRole.


## EXAMPLES

### --------------------EXAMPLE---------------------
```
Set-SPServer -Role SingleServerFarm
```

This example changes the server to SingleServerFarm role.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used. 

**NOTE**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.                 

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Identity
Specifies the name of the server in the farm.

```yaml
Type: SPServerPipeBind
Parameter Sets: (All)
Aliases: Address
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Role
Specifies the name of the server role you want to change. 

The valid values are:

* WebFrontEnd
* Application
* SingleServerFarm
* Distributed Cache
* Search
* Custom
* ApplicationWithSearch
* WebFrontEndWithDistributedCache


```yaml
Type: SPServerRole
Parameter Sets: (All)
Aliases: 
Accepted values: Application, ApplicationWithSearch, Custom, DistributedCache, Search, SingleServerFarm, WebFrontEnd, WebFrontEndWithDistributedCache
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
Sets the status of the server in the farm.

```yaml
Type: SPObjectStatus
Parameter Sets: (All)
Aliases: 
Accepted values: Online, Disabled, Offline, Unprovisioning, Provisioning, Upgrading, Patching
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServerPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
