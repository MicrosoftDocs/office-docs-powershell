---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Install-SPSolution

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Install-SPSolution [-Identity] <SPSolutionPipeBind> [-AllWebApplications]
 [-AssignmentCollection <SPAssignmentCollection>] [-CASPolicies] [-CompatibilityLevel <String>] [-Confirm]
 [-Force] [-FullTrustBinDeployment] [-GACDeployment] [-Language <UInt32>] [-Local] [-Time <String>]
 [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Install-SPSolution [[-Identity] <SPSolutionPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Language <UInt32>] [-Synchronize] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPSolution cmdlet deploys an installed SharePoint solution in the farm.
Use the Add-SPSolution cmdlet to install a SharePoint solution package in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

The following table lists the valid values for the CompatabilityLevel parameter: Below Content Applies To: SharePoint Server 2016

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPSolution cmdlet deploys an installed SharePoint solution in the farm.
Use the Add-SPSolution cmdlet to install a SharePoint solution package in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm and specifies that GAC can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm and specifies that GAC can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment --CompatibilityLevel 15
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm within the latest version directories and specifies that global assembly cache (GAC) can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>Install-SPSolution -Identity contoso_solution.wsp -GACDeployment -AddtoLatestVersion $true
```

This example deploys the installed SharePoint solution contoso_solution.wsp in the farm within the latest version directories and specifies that global assembly cache (GAC) can be deployed for the new SharePoint solution.

### ------------------EXAMPLE 3------------------ (SharePoint Server 2013)
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
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSolutionPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
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
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompatibilityLevel
Below Content Applies To: SharePoint Server 2013

Specifies whether to install into the solution, into a specific version directory based on CompatibilityLevel.
The default behavior if this parameter is not specified is to install the solution only to the version directory based on the version tracked in the manifest of the solution's cab file.
For the list of values, see the table in the  section.
Below Content Applies To: SharePoint Server 2016

{{Fill CompatibilityLevel Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Forces the deployment of the new SharePoint solution.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
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
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -GACDeployment
Specifies that global assembly cache (GAC) can be deployed for the new SharePoint solution.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
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
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Synchronize
Synchronizes all solutions or the specified solution in the local farm.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Time
Specifies when the solution will be deployed.
The default value is immediate deployment.

The type must be a valid DateTime value, in the form 2010, 5, 1.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Below Content Applies To: SharePoint Server 2013

Deploys the SharePoint solution for the specified SharePoint web application.

The value must be in one of the following forms: Below Content Applies To: SharePoint Server 2016

Deploys the SharePoint solution for the specified SharePoint web application.

The value must be in one of the following forms:

--An authentic GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh
--An authentic name of a SharePoint web application (for example, MyOfficeApp1)
--An instance of an authentic SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
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

