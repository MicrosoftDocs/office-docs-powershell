---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPPerformancePointServiceApplicationTrustedLocation

## SYNOPSIS
Creates a new trusted location for a PerformancePoint Service application.

## SYNTAX

```
New-SPPerformancePointServiceApplicationTrustedLocation
 -ServiceApplication <SPPerformancePointMonitoringServiceApplicationPipeBind>
 -TrustedLocationType <TrustedFileType> -Type <RepositoryLocationType> -Url <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Description <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-SPPerformancePointServiceApplicationTrustedLocation cmdlet creates a new trusted location for a PerformancePoint Service application.
The new trusted location can be a Content or Data Source trusted location type and is enforced only when it is enabled in the PerformancePoint Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE--------------------- (SharePoint Server 2013)
```
C:\PS>New-SPPerformancePointServiceApplicationTrustedLocation -ServiceApplication PPSApp_01 -url "http://Some_Valid_Site_URL" -Type Site -TrustedLocationType Content
```

This example creates a new TrustedLocation for the PPSApp_01 service application.
This creates a Content trusted location of type Site with the specified URL.

### ------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>New-SPPerformancePointServiceApplicationTrustedLocation -ServiceApplication PPSApp_01 -url "http://Some_Valid_Site_URL" -Type Site -TrustedLocationType Content
```

This example creates a new TrustedLocation for the PPSApp_01 service application.
This creates a Content trusted location of type Site with the specified URL.

## PARAMETERS

### -ServiceApplication
Specifies the PerformancePoint Service application to which the new trusted location will be added.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint Service application (for example, PerfPointApp1); or an instance of a valid SPPerformancePointMonitoringServiceApplication object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TrustedLocationType
Specifies the type of trusted locations to create.
If TrustedLocationType is not specified, this cmdlet creates all the trusted locations for the specified PerformancePoint Service application.

The type must be one of the following: Content or Data Source.

```yaml
Type: TrustedFileType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Specifies the type of trusted location.

The type must be one of the following: Site Collection, Site, Document Library, List

```yaml
Type: RepositoryLocationType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the URL of the trusted location site, site collection, site, document library, or list.
The type must be a valid URL, in the form http://server_name, or http://server_name/sitecollection/site/list.

```yaml
Type: String
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

### -Description
Specifies the description of the new safe data provider.

The type must be a valid string with a maximum of 4096 characters.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

