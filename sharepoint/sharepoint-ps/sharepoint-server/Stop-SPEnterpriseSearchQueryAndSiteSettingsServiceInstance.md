---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Stop-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance
schema: 2.0.0
---

# Stop-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance

## SYNOPSIS
Stops an instance of a search manager service.

## SYNTAX

```
Stop-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance
 [-Identity] <SearchQueryAndSiteSettingsServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Stop-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance` cmdlet stops an instance of a search manager service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$qssInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Local
Stop-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Identity $qssInstance
```

This example stops the local query and site settings service instance.


## PARAMETERS

### -Identity
Specifies the search manager service instance to stop.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid SPServer name, or the name of a search manager service instance (for example, SearchManagerServiceInstance1); or an instance of a valid SearchManagerServiceInstance object.

```yaml
Type: SearchQueryAndSiteSettingsServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
