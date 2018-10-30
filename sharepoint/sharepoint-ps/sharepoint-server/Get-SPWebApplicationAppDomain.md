---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPWebApplicationAppDomain
schema: 2.0.0
---

# Get-SPWebApplicationAppDomain

## SYNOPSIS

Returns all app domains for a specific web application.

## SYNTAX

### ResourceName
```
Get-SPWebApplicationAppDomain [[-Identity] <SPAppDomainPipeBind>] -AppDomain <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Zone <SPUrlZone>] [<CommonParameters>]
```

### WebApplication
```
Get-SPWebApplicationAppDomain [[-Identity] <SPAppDomainPipeBind>] -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Zone <SPUrlZone>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set. You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPWebApplicationAppDoman cmdlet to return all app domains for a specific web application or for all web applications. If you do not specify parameters, the default zone is used.

## EXAMPLES

### -----------EXAMPLE 1--------- 
```
PS C:\>Get-SPWebApplicationAppDomain
```

Returns a list of SPAppDomain objects, one for each of the app domains for all web applications in the farm.

### -----------EXAMPLE 2--------- 
```
PS C:\>Get-SPWebApplicationAppDomain -Zone Default
```

Returns a list of SPAppDomain objects, one for each of the app domains for the Default zone for all web applications in the farm.

### -----------EXAMPLE 3--------- 
```
PS C:\>Get-SPWebApplicationAppDomain -WebApplication http://www.contoso.com
```

Returns a list of SPAppDomain objects, one for each of all the app domains for the specified web application for all zones.

### -----------EXAMPLE 4--------- 
```
PS C:\>Get-SPWebApplicationAppDomain -AppDomain contosoapps.com
```

Returns a list of SPAppDomain objects, one for each web application and zone pair that shares the specified app domain.

## PARAMETERS

### -Identity

Specifies the string of a domain name (that is, contoso.com) or a SPAppDomain object.

```yaml
Type: SPAppDomainPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AppDomain

Specifies the URI of the app domain.

```yaml
Type: String
Parameter Sets: ResourceName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication

Specifies the GUID, URI, or name of the web application for which the app domain is being configured.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection

Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Zone

Specifies the security zone to which the app domain will be assigned.

* Default

* Intranet

* Internet

* Extranet

* Custom

If no value is specified, Default is applied.

```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.Administration.SPAppCmdlets.SPAppDomainPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-SPWebApplicationAppDomain](New-SPWebApplicationAppDomain.md)

[Remove-SPWebApplicationAppDomain](Remove-SPWebApplicationAppDomain.md)

