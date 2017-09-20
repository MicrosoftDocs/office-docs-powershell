---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Start-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance

## SYNOPSIS
Starts an instance of a search manager service.

## SYNTAX

```
Start-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance
 [-Identity] <SearchQueryAndSiteSettingsServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Start-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance cmdlet starts the query and site settings service instance on the server instance in the same farm as the search service application to host the query object model (OM), Windows Communication Foundation (WCF) endpoint, and query processor for the search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$qssInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -LocalStart-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Identity $qssInstance
```

This example starts the local query and site settings instance.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$qssInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Local
Start-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Identity $qssInstance
```

This example starts the local query and site settings instance.

## PARAMETERS

### -Identity
Specifies the search manager service instance to start.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid SPServer name, or the name of a search manager service instance (for example, SearchManagerServiceInstance1); or an instance of a valid SearchManagerServiceInstance object.

```yaml
Type: SearchQueryAndSiteSettingsServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/362fe4d2-417d-4c5d-9a9f-046580980182(Office.15).aspx)

