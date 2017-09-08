---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPOUser

## SYNOPSIS
Returns the SharePoint Online user or security group accounts that match a given search criteria.

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPOUser [-Group <String>] [-Limit <String>] -Site <SpoSitePipeBind>
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPOUser [-Limit <String>] -Site <SpoSitePipeBind>
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPOUser [-LoginName <String>] -Site <SpoSitePipeBind>
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPOUser cmdlet matches one and only one user or security group.

You must be a SharePoint Online global administrator and a site collection administrator to run the Get-SPOUser cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

### (SharePoint Online)
```

```

### (SharePoint Online)
```

```

### (SharePoint Online)
```

```

## PARAMETERS

### -Group
{{Fill Group Description}}

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

### -Limit
{{Fill Limit Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginName
{{Fill LoginName Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
{{Fill Site Description}}

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors]()

[Remove-SPOUser]()

[Set-SPOUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/cda4e946-3c9d-4ac2-bfc5-b97a12dc3ad2(Office.15).aspx)

