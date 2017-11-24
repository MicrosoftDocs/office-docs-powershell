---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPWebApplicationAppDomain
schema: 2.0.0
---

# Get-SPWebApplicationAppDomain

## SYNOPSIS

{{Fill in the Synopsis}}



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

{{Fill in the Description}}



## EXAMPLES

### -----------EXAMPLE 1--------- 
```
C:\PS>Get-SPWebApplicationAppDomain
```

Returns a list of SPAppDomain objects, one for each of the app domains for all web applications in the farm.

### -----------EXAMPLE 2--------- 
```
C:\PS>Get-SPWebApplicationAppDomain -Zone Default
```

Returns a list of SPAppDomain objects, one for each of the app domains for the Default zone for all web applications in the farm.

### -----------EXAMPLE 3--------- 
```
C:\PS>Get-SPWebApplicationAppDomain -WebApplication http://www.contoso.com
```

Returns a list of SPAppDomain objects, one for each of all the app domains for the specified web application for all zones.

### -----------EXAMPLE 4--------- 
```
C:\PS>Get-SPWebApplicationAppDomain -AppDomain contosoapps.com
```

Returns a list of SPAppDomain objects, one for each web application and zone pair that shares the specified app domain.

## PARAMETERS

### -Identity

{{Fill Identity Description}}



```yaml
Type: SPAppDomainPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AppDomain

{{Fill AppDomain Description}}



```yaml
Type: String
Parameter Sets: ResourceName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication

{{Fill WebApplication Description}}



```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection

{{Fill AssignmentCollection Description}}



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

### -Zone

{{Fill Zone Description}}



```yaml
Type: SPUrlZone
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

### Microsoft.SharePoint.Administration.SPAppCmdlets.SPAppDomainPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-SPWebApplicationAppDomain]()

[Remove-SPWebApplicationAppDomain]()

