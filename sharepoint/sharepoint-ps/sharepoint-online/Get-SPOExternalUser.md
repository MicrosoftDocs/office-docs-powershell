---
external help file: 
applicable: SharePoint Online
title: Get-SPOExternalUser
schema: 2.0.0
---

# Get-SPOExternalUser

## SYNOPSIS
Returns external users in the tenant's folder.

## SYNTAX

```
Get-SPOExternalUser [[-Position] <Int32>] [[-PageSize] <Int32>] [[-Filter] <String>] [[-SortOrder] <SortOrder>]
 [[-SiteUrl] <String>] [-ShowOnlyUsersWithAcceptingAccountNotMatchInvitedAccount <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPOExternalUser cmdlet returns external users that are located in the tenant's folder based on specified criteria.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

### ------------ Example 1 --------------------
```
{example code}
```
{example description}

## PARAMETERS

### -Filter
Limits the results to only those users whose first name, last name or email address begins with the text in the string, using a case-insensitive comparison

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
Specifies the maximum number of users to be returned in the collection.

The value must be less than or equal to 50.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Position
Use to specify the zero-based index of the position in the sorted collection of the first result to be returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl
Specifies the site to retrieve external users for.
If no site is specified, the external users for all sites are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortOrder
Specifies the sort results in Ascending or Descending order on the SPOUser.Email property should occur.

```yaml
Type: SortOrder
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowOnlyUsersWithAcceptingAccountNotMatchInvitedAccount
{{Fill ShowOnlyUsersWithAcceptingAccountNotMatchInvitedAccount Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

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

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Remove-SPOExternalUser]()


