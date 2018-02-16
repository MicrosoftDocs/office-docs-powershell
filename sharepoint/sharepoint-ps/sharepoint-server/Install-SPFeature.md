---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Install-SPFeature
schema: 2.0.0
---

# Install-SPFeature

## SYNOPSIS

Installs a SharePoint Feature by using the Feature.xml file.



## SYNTAX

### PathSet
```
Install-SPFeature [-Path] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <Int32>] [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### AllExistingFeatures
```
Install-SPFeature [-AllExistingFeatures] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-SolutionId <String>] [-WhatIf] [<CommonParameters>]
```

### ScanForFeatures
```
Install-SPFeature [-ScanForFeatures] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-SolutionId <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPFeature cmdlet installs a specific SPFeature by providing, in the Identity parameter, the relative path from the version-specific common FEATURES folder to the feature.
The version-specific FEATURES folder is "$env:ProgramFiles\Common Files\Microsoft Shared\Web Server Extensions\14\TEMPLATE\FEATURES\" if the site collection is in 14 mode, and "$env:ProgramFiles\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\FEATURES\" if the site collection is in 15 mode.
The SharePoint Feature's files must already be put in the proper directory, either manually or by using a solution installer.

If the value of the AllExistingFeatures parameter is true, the file system is scanned and all new features that are in both FEATURES folders are installed.
This is generally only used during deployment and upgrade.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
C:\PS>Install-SPFeature -path "MyCustomFeature"
```

This example installs a new feature at $env:ProgramFiles\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\FEATURES\MyCustomFeature/feature.xml.

### --------------EXAMPLE 2----------------- 
```
C:\PS>Install-SPFeature -AllExistingFeatures -Whatif
```

This example shows the unregistered features that are available on the file system and that are installed if this command is run without the WhatIf parameter.
This is commonly done after an upgrade process.

### --------------EXAMPLE 3----------------- 
```
C:\PS>Install-SPFeature -path "MyCustomFeature"  -CompatibilityLevel 14
```

This example installs a new feature at $env:ProgramFiles\Common Files\Microsoft Shared\Web Server Extensions\14\TEMPLATE\FEATURES\MyCustomFeature\feature.xml.

### --------------EXAMPLE 4----------------- 
```
C:\PS>Install-SPFeature -path "MyCustomFeature"  -CompatibilityLevel 15
```

This example installs a new feature at $env:ProgramFiles\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\FEATURES\MyCustomFeature\feature.xml.

## PARAMETERS

### -Path
Specifies an authentic file path; for example, MyFeature.

The path to feature must be a literal path to the 14\Template\Features directory.
The feature.xml file name is implied and does not need to be provided.

If the path to the feature is not found , the following error message is displayed: "Failed to find the XML file at location 14\Template\Features\\\<file path\>."

```yaml
Type: String
Parameter Sets: PathSet
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllExistingFeatures
Scans for existing, but unregistered features, and then registers them with the farm.

```yaml
Type: SwitchParameter
Parameter Sets: AllExistingFeatures
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScanForFeatures
Scans and then displays a feature.
The ScanForFeatures parameter does not install a feature.

```yaml
Type: SwitchParameter
Parameter Sets: ScanForFeatures
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CompatibilityLevel
Specifies the version of feature to install.
When the version is not specified it will default to the web applications MaxVersion value.

The values for this can be either 14 or 15.

```yaml
Type: Int32
Parameter Sets: PathSet
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -Force
Forces the installation of an already installed feature.

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

### -SolutionId
Specifies the solution ID of the features.
If the SolutionId parameter is not provided, all solution IDs are scanned.

```yaml
Type: String
Parameter Sets: AllExistingFeatures, ScanForFeatures
Aliases: 
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

