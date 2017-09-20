---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Install-SPWebPartPack

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Installs the specified Web Part package to the specified location.



## SYNTAX

### UseFileName
```
Install-SPWebPartPack [-LiteralPath] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Force] [-GlobalInstall] [-Language <UInt32>] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
 [-CompatibilityLevel <String>] [<CommonParameters>]
```

### UseName
```
Install-SPWebPartPack [-Name] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-GlobalInstall] [-Language <UInt32>] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
 [-CompatibilityLevel <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPWebPartPack cmdlet installs the Web Part package, at the LiteralPath parameter location, in the local farm.
The Web Part package can be installed in a specific Web application by using the WebApplication parameter.
If a Web application is not specified, the Web Part package is installed in all Web applications.

Use the Language parameter to specify a package language.

Use the GlobalInstall parameter to install the package to the global assembly cache (GAC).
Assemblies in the GAC are granted FullTrust permission, which gives this package full access to all system-wide resources.

Use the Force parameter to install the package to overwrite any existing Web Part package with the same name or installed in the same location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Install-SPWebPartPack "MyCustomWebPartPack" -LiteralPath "c:/mywebpart.wpp" -GlobalInstall
```

This example installs the Web Part Package with the name MyCustomWebPartPack globally in the farm from the path c:/mywebpart.wpp.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Install-SPWebPartPack "MyCustomWebPartPack" -LiteralPath "c:/mywebpart.wpp" -GlobalInstall
```

This example installs the Web Part Package with the name MyCustomWebPartPack globally in the farm from the path c:/mywebpart.wpp.

## PARAMETERS

### -LiteralPath
Specifies the exact path to the Web Part package.

```yaml
Type: String
Parameter Sets: UseFileName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the Web Part package to install.

```yaml
Type: String
Parameter Sets: UseName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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

### -Force
Overwrites any existing Web Part package with the same name or installed in the same location.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalInstall
Installs the Web Part package in the global assembly cache (GAC) rather than in the /bin directory of each Web application.
This installation makes the Web Part globally accessible on the servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
Specifies the language ID for the Web Part package.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the Web application on which to install the Web Part pack.
If no Web application is specified, the Web Part pack is installed on all Web applications.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### -CompatibilityLevel
{{Fill CompatibilityLevel Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

