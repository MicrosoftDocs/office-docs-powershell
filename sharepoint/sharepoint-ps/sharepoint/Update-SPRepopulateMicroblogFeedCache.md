---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Update-SPRepopulateMicroblogFeedCache

## SYNOPSIS
Refreshes the cache.

## SYNTAX

###  (Default)
```
Update-SPRepopulateMicroblogFeedCache [-AccountName <String>]
 -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [-SiteUrl <String>] [<CommonParameters>]
```

### Default
```
Update-SPRepopulateMicroblogFeedCache [-AccountName <String>]
 -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [-SiteUrl <String>] [<CommonParameters>]
```

### FollowableList
```
Update-SPRepopulateMicroblogFeedCache -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] -SiteSubscription <SPSiteSubscriptionPipeBind> -ListId <Guid>
 -ListRootFolderUrl <String> -SiteId <Guid> -WebId <Guid> [<CommonParameters>]
```

## DESCRIPTION
Use the `Update-SPRepopulateMicroblogFeedCache` cmdlet to refresh the feeds of a given user.
It can be used in scenarios where the automatic refresh has failed or when reverting to an old version of a user's personal site.

When you refresh the cache, the `Update-SPRepopulateMicroblogLMTCache` cmdlet should be run first and then the `Update-SPRepopulateMicroblogFeedCache` cmdlet second.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE 1------------
```
C:\PS>Update-SPRepopulateMicroblogFeedCache -ProfileServiceApplicationProxy a4f93369-0795-4aee-8a21-46f5ade29606 -AccountName contoso\<user>
```

This example refreshes the feeds for a specific user by using the AccountName parameter.

### ------------EXAMPLE 2------------
```
C:\PS>Update-SPRepopulateMicroblogFeedCache -ProfileServiceApplicationProxy a4f93369-0795-4aee-8a21-46f5ade29606 -AccountName contoso\<user> -SiteSubscription 0C37852B-34D0-418e-91C6-2AC25AF4BE5B
```

This example refreshes the feeds for a specific user by using the AccountName parameter.

## PARAMETERS

### -AccountName
Specifies the user's account name for the User Profile Service application.

```yaml
Type: String
Parameter Sets: (All), Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProfileServiceApplicationProxy
Specifies the User Profile Service application proxy to update.

The type must be in one of the following forms:

--A valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh
--A valid name of a service application proxy (for example, UserProfileSvcProxy1)
--An instance of a valid SPServiceApplicationProxy object

```yaml
Type: SPServiceApplicationProxyPipeBind
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -SiteSubscription
Specifies the account under which this service should run.
This parameter is mandatory in a hosted-environment and optional in a non-hosted environment.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All), Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: FollowableList
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteUrl
{{Fill SiteUrl Description}}

```yaml
Type: String
Parameter Sets: (All), Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListId
{{Fill ListId Description}}

```yaml
Type: Guid
Parameter Sets: FollowableList
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListRootFolderUrl
{{Fill ListRootFolderUrl Description}}

```yaml
Type: String
Parameter Sets: FollowableList
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteId
{{Fill SiteId Description}}

```yaml
Type: Guid
Parameter Sets: FollowableList
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebId
{{Fill WebId Description}}

```yaml
Type: Guid
Parameter Sets: FollowableList
Aliases: 
Applicable: SharePoint Server 2016

Required: True
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

[Update-SPRepopulateMicroblogLMTCache]()
