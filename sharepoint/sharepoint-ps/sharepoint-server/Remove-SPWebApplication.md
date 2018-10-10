---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Remove-SPWebApplication
schema: 2.0.0
---

# Remove-SPWebApplication

## SYNOPSIS
Deletes the specified Web application.


## SYNTAX

### RemoveZoneOfWebApp
```
Remove-SPWebApplication [-Identity] <SPWebApplicationPipeBind> -Zone <SPUrlZone>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DeleteIISSite] [-WhatIf] [<CommonParameters>]
```

### RemoveWebApp
```
Remove-SPWebApplication [-Identity] <SPWebApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DeleteIISSite] [-RemoveContentDatabases] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Remove-SPWebApplication` cmdlet deletes the Web application specified by the Identity and Zone parameters.
If no zone is provided, the entire Web application and all zones are removed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
PS C:\>Get-SPWebApplication http://sitename | Remove-SPWebApplication -Zone "Internet" -Confirm
```

This example prompts and then removes the Internet zone Web application extension on the Web application at http://sitename.
This command does not remove the content databases or the IIS Web site.


### ------------------EXAMPLE 2-----------------------
```
PS C:\>Remove-SPWebApplication http://sitename -Confirm -DeleteIISSite -RemoveContentDatabases
```

This example permanently removes the Web application, all content databases and the IIS Web site at http://sitename


## PARAMETERS

### -Identity
Specifies the URL or name of the Web application to delete.

The type must be a valid URL, in the form http://server_name, or a valid name, in the form WebApplication-1212.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Zone
Specifies one of the five zones to be removed.
If this parameter is not provided, all Web application zones are removed.

The type must be any one of the following values: Default, Intranet, Internet, Extranet, or Custom.

```yaml
Type: SPUrlZone
Parameter Sets: RemoveZoneOfWebApp
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteIISSite
Deletes the associated IIS Web sites.
If this parameter is not provided, the IIS site is not removed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveContentDatabases
Permanently deletes all associated content databases.
If this parameter is not provided, no content databases are removed.

```yaml
Type: SwitchParameter
Parameter Sets: RemoveWebApp
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
