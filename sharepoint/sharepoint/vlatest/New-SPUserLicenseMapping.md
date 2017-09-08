---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPUserLicenseMapping

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
New-SPUserLicenseMapping -Claim <SPClaim> -License <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
New-SPUserLicenseMapping -ClaimType <String> -License <String> -OriginalIssuer <String> -Value <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-ValueType <String>]
 [-WebApplication <SPWebApplicationPipeBind>] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_3
```
New-SPUserLicenseMapping -License <String> -Role <String> -RoleProviderName <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WebApplication <SPWebApplicationPipeBind>]
 [-WhatIf]
```

### UNNAMED_PARAMETER_SET_4
```
New-SPUserLicenseMapping -License <String> -SecurityGroup <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WebApplication <SPWebApplicationPipeBind>]
 [-WhatIf]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the New-SPUserLicenseMapping cmdlet to create a new license mapping object.
This cmdlet must be used first before the Add-SPUserLicenseMapping cmdlet can be used.

The object created by using the New-SPUserLicenseMapping cmdlet is stored in memory and is not written to any database in SharePoint Server 2013.
After the object is created you can pipe the result to the Add-SPUserLicenseMapping cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------EXAMPLE------------- (SharePoint Server 2013)
```
C:\PS>$a=New-SPUserLicenseMapping -SecurityGroup yoursecuritygroup -License Enterprise

C:\PS>$a | Add-SPUserLicenseMapping
```

This example creates a license mapping object and then pipes the result to the Add-SPUserLicenseMapping cmdlet.

### ----------EXAMPLE------------- (SharePoint Server 2016)
```
C:\PS>$a = New-SPUserLicenseMapping -SecurityGroup yoursecuritygroup -License Enterprise

C:\PS>$a | Add-SPUserLicenseMapping
```

This example creates a license mapping object and then pipes the result to the Add-SPUserLicenseMapping cmdlet.

## PARAMETERS

### -Claim
Specifies the claims principal to license.
The value must be an authentic claims principal.

```yaml
Type: SPClaim
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClaimType
Specifies the type of the claim.
The value must be an authentic name of a claim type.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -License
Specifies the name of a supported SharePoint user license.
For the full list of supported licenses on a SharePoint farm, see the Get-SPUserLicense cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -OriginalIssuer
Specifies the original issuer of the claim.
The value must be the authentic name of an original issuer.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
Specifies the name of a forms-based role.
The value must be an authentic name of a forms-based role.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleProviderName
Specifies the name of a role provider.
The value must be an authentic name of a role provider.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecurityGroup
Specifies the name of an AD DS security group.
The value must be a name of an Active Directory security group.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_4
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Value
Specifies the value of the claim.
The value must be an authentic claim value.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

### -ValueType
Specifies the value type of the claim.
The value must be an authentic name of a claim value type.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL, GUID, web application name, or web application object instance where the mapping is to be added.
If you omit this parameter, the mapping is applied to the entire farm.

The type must be an URL in the form http://server_name or http://server_name/sites/sitename, a GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh), a name of a web application (for example, SharePoint - 80), or an instance of a web application object.

```yaml
Type: SPWebApplicationPipeBind
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

[Add-SPUserLicenseMapping]()

[Get-SPUserLicenseMapping]()

[Remove-SPUserLicenseMapping]()

