---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Install-SPSolution
schema: 2.0.0
---

# Install-SPSolution

## SYNOPSIS

Deploys an installed SharePoint solution in the farm.



## SYNTAX

### Deploy
```
Install-SPSolution [-Identity] <SPSolutionPipeBind> [-AllWebApplications]
 [-AssignmentCollection <SPAssignmentCollection>] [-CASPolicies] [-CompatibilityLevel <String>] [-Confirm]
 [-Force] [-FullTrustBinDeployment] [-GACDeployment] [-Language <UInt32>] [-Local] [-Time <String>]
 [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

### Synchronize
```
Install-SPSolution [[-Identity] <SPSolutionPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Language <UInt32>] [-Synchronize] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPSolution cmdlet deploys an installed SharePoint solution in the farm.
Use the Add-SPSolution cmdlet to install a SharePoint solution package in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm and specifies that GAC can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment -AddtoLatestVersion $true
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm within the latest version directories and specifies that global assembly cache (GAC) can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 3------------------ 
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment -CompatibilityLevel {14,15}
```

This example deploys the installed SharePoint solution installs a previously added solution so it can be used correctly in both 14 and 15 mode site collections.

## PARAMETERS

### -Identity
Specifies the SharePoint solution to deploy.

The value must be an authentic GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; an authentic name of a SharePoint solution (for example, SPSolution1); or an instance of an authentic SPSolution object.

```yaml
Type: SPSolutionPipeBind
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSolutionPipeBind
Parameter Sets: Synchronize
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllWebApplications
Specifies that the new SharePoint solution is deployed for all SharePoint web applications in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -CASPolicies
Specifies that code access security (CAS) policies can be deployed for the new SharePoint solution.

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Forces the deployment of the new SharePoint solution.

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullTrustBinDeployment
Specifies that full trust Bin deployment is permitted.
This parameter is to be used if the solution is fully trusted.

Bin assembly is an assembly installed into the bin directory of the virtual server.
The assembly in the package will have DeploymentTarget=WebApplication attribute set.
For additional information about bin assembly, see Assembly Element

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GACDeployment
Specifies that global assembly cache (GAC) can be deployed for the new SharePoint solution.

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
Specifies a language for the solution when a solution language package is deployed.
If this parameter is not specified, zero ("0") is assumed.
Use zero for solutions that are valid for all languages.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Local
Deploys the solution on the active server.

```yaml
Type: SwitchParameter
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Synchronize
Synchronizes all solutions or the specified solution in the local farm.

```yaml
Type: SwitchParameter
Parameter Sets: Synchronize
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Time
Specifies when the solution will be deployed.
The default value is immediate deployment.

The type must be a valid DateTime value, in the form 2010, 5, 1.

```yaml
Type: String
Parameter Sets: Deploy
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication

Deploys the SharePoint solution for the specified SharePoint web application.

The value must be in one of the following forms:

--An authentic GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh
--An authentic name of a SharePoint web application (for example, MyOfficeApp1)
--An instance of an authentic SPWebApplication object.



```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: Deploy
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

