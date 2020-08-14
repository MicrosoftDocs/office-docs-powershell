---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsearchcrawllog
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSearchCrawlLog
---

# Get-PnPSearchCrawlLog

## SYNOPSIS
Returns entries from the SharePoint search crawl log. Make sure you are granted access to the crawl log via the SharePoint search admin center at https://<tenant>-admin.sharepoint.com/_layouts/15/searchadmin/crawllogreadpermission.aspx in order to run this cmdlet.

## SYNTAX 

```powershell
Get-PnPSearchCrawlLog [-LogLevel <LogLevel>]
                      [-RowLimit <Int>]
                      [-Filter <String>]
                      [-ContentSource <ContentSource>]
                      [-StartDate <DateTime>]
                      [-EndDate <DateTime>]
                      [-RawFormat [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSearchCrawlLog
```

Returns the last 100 crawl log entries for site content.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSearchCrawlLog -Filter "https://<tenant>-my.sharepoint.com/personal"
```

Returns the last 100 crawl log entries for OneDrive content.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPSearchCrawlLog -ContentSource UserProfiles 
```

Returns the last 100 crawl log entries for user profiles.

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPSearchCrawlLog -ContentSource UserProfiles -Filter "mikael"
```

Returns the last 100 crawl log entries for user profiles with the term "mikael" in the user principal name.

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPSearchCrawlLog -ContentSource Sites -LogLevel Error -RowLimit 10
```

Returns the last 10 crawl log entries with a state of Error for site content.

### ------------------EXAMPLE 6------------------
```powershell
Get-PnPSearchCrawlLog -EndDate (Get-Date).AddDays(-100)
```

Returns the last 100 crawl log entries up until 100 days ago.

### ------------------EXAMPLE 7------------------
```powershell
Get-PnPSearchCrawlLog -RowFilter 3 -RawFormat
```

Returns the last 3 crawl log entries showing the raw crawl log data.

## PARAMETERS

### -ContentSource
Content to retrieve (Sites, User Profiles). Defaults to Sites.

```yaml
Type: ContentSource
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EndDate
End date to stop getting entries from. Default to current time.

```yaml
Type: DateTime
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Filter
Filter to limit what is being returned. Has to be a URL prefix for SharePoint content, and part of a user principal name for user profiles. Wildcard characters are not supported.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LogLevel
Filter what log entries to return (All, Success, Warning, Error). Defaults to All

```yaml
Type: LogLevel
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RawFormat
Show raw crawl log data

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RowLimit
Number of entries to return. Defaults to 100.

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -StartDate
Start date to start getting entries from. Defaults to start of time.

```yaml
Type: DateTime
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)