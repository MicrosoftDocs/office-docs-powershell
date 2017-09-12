---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPUser

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns the user account or accounts that match a given search criteria.



## SYNTAX

```
Get-SPUser [[-Identity] <SPUserPipeBind>] -Web <SPWebPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Group <SPGroupPipeBind>] [-Limit <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPUser cmdlet returns all SharePoint user accounts that match the scope given by the Identity, Web, or Group parameters.

The Identity parameter can use the alias of a user for returning exact matches.
However, a scope must be provided if the Get-SPUser cmdlet is to work.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Get-SPUser -Web "http://zsharepoint2" -Group "Viewers"
```

This example returns all members of the group Viewers on the Web site http://zsharepoint2.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPUser -Web "http://zsharepoint2" -Group "Viewers"
```

This example returns all members of the group Viewers on the Web site http://zsharepoint2.

## PARAMETERS

### -Identity
Specifies the GUID or login name of the user to be returned.

The type must be a valid URL, in the form http://server_name, or GUID, in the form1234-5678-9807.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Specifies the Web site to be used as a scope.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint Foundation 2013 Web site (for example, MySPSite1); or an instance of a valid SPWeb object.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Group
Specifies the user group to which the new user belongs.

```yaml
Type: SPGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Specifies the maximum number of users to return.
The default value is 500.

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

