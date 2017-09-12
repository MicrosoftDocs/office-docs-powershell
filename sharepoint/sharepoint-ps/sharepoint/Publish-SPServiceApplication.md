---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Publish-SPServiceApplication

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Shares the specified local service application outside the farm.



## SYNTAX

```
Publish-SPServiceApplication [-Identity] <SPServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Description <String>] [-InfoLink <Uri>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Publish-SPServiceApplication cmdlet publishes the local service application, specified by the Identity parameter, outside the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Publish-SPServiceApplication 053c34be-d251-488c-8e94-644eae94da26 -Description "Connect to this TestServiceApplcation of you want to use FeatureA in your farm" -InfoLink http://testurl
```

This example publishes a service application to another farm.

The service application GUID is unique to every farm.
You can run the Get-SPServiceApplication cmdlet to see the GUID of the service applications, and then use the result from the Get-SPServiceApplication cmdlet for other SPServiceApplication cmdlets; for example, Grant-SPServiceApplication.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Publish-SPServiceApplication 053c34be-d251-488c-8e94-644eae94da26 -Description "Connect to this TestServiceApplcation of you want to use FeatureA in your farm" -InfoLink http://testurl
```

This example publishes a service application to another farm.

The service application GUID is unique to every farm.
You can run the Get-SPServiceApplication cmdlet to see the GUID of the service applications, and then use the result from the Get-SPServiceApplication cmdlet for other SPServiceApplication cmdlets; for example, Grant-SPServiceApplication.

## PARAMETERS

### -Identity
Specifies the GUID of the service application to share outside the farm.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPServiceApplicationPipeBind
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

### -Description
Describes the service application to share outside the farm.
If no value is specified, the value is left blank.

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

### -InfoLink
Specifies the link to more information about the service application to share outside the farm.
If no link is specified, no link is made available.

The type must be a valid URL, in the form  http://server_name/Site_Name/page_name.

```yaml
Type: Uri
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

