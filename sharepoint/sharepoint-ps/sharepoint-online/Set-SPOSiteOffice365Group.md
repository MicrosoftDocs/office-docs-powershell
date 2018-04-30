---
external help file: 
applicable: SharePoint Online
title: Set-SPOSiteOffice365Group
schema: 2.0.0
---

# Set-SPOSiteOffice365Group

## SYNOPSIS
Connects a top-level SPO site collection to a new Office 365 Group.

## SYNTAX

```
Set-SPOSiteOffice365Group 
  -Site <string> 
  -DisplayName  <string> 
  -Alias <string> 
  [-IsPublic] 
  [-Description <string>] 
  [-Classification <string>] 
  [-KeepOldHomepage] 
  [<CommonParameters>] 
```

## DESCRIPTION
Connects a top-level SPO site collection to a new Office 365 Group.  You must be a SharePoint Online global administrator to run the cmdlet. 

> [!IMPORTANT]
> This cmdlet is currently in preview and is subject to change. It is not currently supported for use in production environments.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

This example creates a new Office 365 Group named "site1group" and connects site collection https://contoso.sharepoint.com/sites/site1 to it.  The group will privacy set to "Private" and Classification set to "Highly Confidential".

```
Set-SPOSiteOffice365Group ` 
  -Site https://contoso.sharepoint.com/sites/site1 ` 
  -DisplayName "site1group" ` 
  -Alias "site1group" ` 
  -Classification "Highly Confidential" ` 
```


## PARAMETERS

### -Site 

The site collection being connected to new Office 365 Group. 

```yaml
Type: Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind 
Parameter Sets: (All) 
Aliases:  
Applicable: SharePoint Online 

Required: True 
Position: Named 
Default value: None 
Accept pipeline input: False 
Accept wildcard characters: False  
```

### -DisplayName

Specifies the name of the new Office 365 Group that will be created.

```yaml
Type: String 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Alias

Specifies the email alias for the new Office 365 Group that will be created.

```yaml
Type: String 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Description

Specifies the group’s description.

```yaml
Type: String 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -IsPublic

Determines the Office 365 Group’s privacy setting.  If switch is included, the group will be public, otherwise it will be private.

```yaml
Type: SwitchParameter 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Classification

Specifies the classification value, if classifications are set for the organization. If no value is provided, the default classification will be set, if one is configured.

See [Azure Active Directory cmdlets for configuring group settings](https://go.microsoft.com/fwlink/?LinkID=827484) and follow the steps in the Create settings at the directory level to define the classification for Office 365 groups.  

See [Manage Office 365 Groups with PowerShell](https://support.office.com/en-us/article/Manage-Office-365-Groups-with-PowerShell-aeb669aa-1770-4537-9de2-a82ac11b0540) for more information.

```yaml
Type: String 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepOldHomepage

For sites that already have a modern page set as homepage, you can specify whether you want to keep it as the homepage.  

```yaml
Type: SwitchParameter 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```