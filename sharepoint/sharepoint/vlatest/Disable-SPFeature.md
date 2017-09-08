---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Disable-SPFeature

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Disable-SPFeature [-Identity] <SPFeatureDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-Url <String>] [-WhatIf]
```

## DESCRIPTION
The Disable-SPFeature cmdlet disables a SharePoint Feature at the given scope.
If the scope of the Feature is the farm, the URL is not needed.
Otherwise, provide the URL at which this Feature is to be deactivated (explicit scope is not needed).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>Disable-SPFeature -identity "MyCustom" -URL http://somesite
```

This example disables the "MyCustom" Web site scoped feature at   http://somesite.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Disable-SPFeature -identity "MyCustom" -URL http://somesite
```

This example disables the "MyCustom" Web site scoped feature at   http://somesite.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>$w = Get-SPWeb http://somesite/myweb | ForEach{ $_.URL }

C:\PS>Get-SPFeature -Web $w |%{ Disable-SPFeature -Identity $_ -URL $w}
```

This example disables all features in the subsite at http://somesite/myweb.

You do not need to use the SPAssignment cmdlets in this case because the Web object is not stored -- only the string value for the URL.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>$w = Get-SPWeb http://somesite/myweb | ForEach{ $_.URL }

C:\PS>Get-SPFeature -Web $w |%{ Disable-SPFeature -Identity $_ -URL $w}
```

This example disables all features in the subsite at http://somesite/myweb.

You do not need to use the SPAssignment cmdlets in this case because the Web object is not stored -- only the string value for the URL.

## PARAMETERS

### -Identity
Specifies the name of the Feature or GUID to disable.

The type must be the name of the Feature folder located in the 14\Template\Features folder or GUID, in the format 21d186e1-7036-4092-a825-0eb6709e9281.

```yaml
Type: SPFeatureDefinitionPipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces a Feature to be disabled.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the URL of the Web application, site collection, or Web site to which the Feature is being disabled.

The type must be a valid URL, such as http://server_name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

